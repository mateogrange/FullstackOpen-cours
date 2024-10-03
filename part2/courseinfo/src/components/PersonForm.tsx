import React from "react";

interface PersonFormProps {
  addNewName: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newName: string;
  newNumber:string;
}

const PersonForm: React.FC<PersonFormProps> = ({addNewName, handleChangeName, handleChangeNumber, newName, newNumber}) => {
  return (
    <form onSubmit={addNewName}>
      <div>name: <input onChange={handleChangeName} value={newName}/></div>
      <div>number: <input onChange={handleChangeNumber} value={newNumber}/></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm