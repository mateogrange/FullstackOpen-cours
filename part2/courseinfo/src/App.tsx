import React from 'react'
import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-123456', id: 1},
    {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
    {name: 'Dan Abramov', number: '12-43-234345', id: 3},
    {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  const addNewName = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    const found = persons.some(el => el.name.toUpperCase() === newName.toUpperCase())

    if(!found){
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(newName + ' is already added to phonebook')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} filter={filter}/>

      <h2>Add a new </h2>
      <PersonForm addNewName={addNewName} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} newName={newName} newNumber={newNumber}/>

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App