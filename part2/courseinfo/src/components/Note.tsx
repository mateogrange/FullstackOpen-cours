import React from 'react'

interface Note {
  id: number;
  content: string;
  date: string;
  important: boolean;
}

interface NotesList {
  notes: Note[];
}
const Note: React.FC<{note : Note}> = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

export default Note