import { useState, useEffect } from 'react'
import React from "react";
import Note from './components/Note'
import noteService from './services/notes'

interface PropsApp {
  notes : {
    id: number;
    date: string;
    content: string;
    important: boolean;
  }[];
}

const App: React.FC<PropsApp> = ({ notes: initialNotes }) => {
  const [notes, setNotes] = useState(initialNotes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const addNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

   noteService
     .create(noteObject)
     .then(returnedNote => {
       setNotes (notes.concat(returnedNote))
       setNewNote('')
     })
  }

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const toggleImportanceOf = (id: number) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(n => n.id !== id ? n : returnedNote))
      })
      .catch(error => {
        alert(
          `the note ${note.content} was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })

    if (!note) {
      console.error(`Note with id ${id} not found.`);
      return;
    }
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        <ul>
          {notesToShow.map(note =>
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          )}
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App