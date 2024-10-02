import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const found = persons.some(el => el.name.toUpperCase() === newName.toUpperCase())
    if(!found){
      setPersons(persons.concat(nameObject))
      setNewName('')
    } else {
      alert(newName + ' is already added to phonebook')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>name: <input onChange={handleChangeName} value={newName}/></div>
        <div>number: <input onChange={handleChangeNumber} value={newNumber}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) =>
        <li key={index}>{person.name} {person.number}</li>
      )}
    </div>
  )
}

export default App