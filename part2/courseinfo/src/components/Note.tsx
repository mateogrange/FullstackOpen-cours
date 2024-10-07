import React from "react";

interface NoteProps {
  note: {
    id: number;
    date: string;
    content: string;
    important: boolean;
  };
  toggleImportance: () => void;
}

const Note: React.FC<NoteProps> = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note