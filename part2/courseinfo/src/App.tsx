import React, {useEffect} from 'react'
import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personsService from "./services/persons"

interface PersonsInt {
  id: number;
  name: string;
  number: string;
}

interface PropsApp {
  persons: PersonsInt[];
}

const App: React.FC<PropsApp> = ({persons: initPersons}) => {
  const [persons, setPersons] = useState<PersonsInt>(initPersons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  console.log(persons)

  useEffect(() => {
    personsService
      .getAll()
      .then(initPersons => {
        setPersons(initPersons)
      })
  }, []);

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

    const found = persons.some(el => el.name.toLowerCase() === newName.toLowerCase())
    if(!found) {
      personsService
        .create(nameObject)
        .then(setNewObject => {
            setPersons(persons.concat(setNewObject))
        })
    } else {
      alert(newName + ' is already added to phonebook')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} filter={filter.toLowerCase()}/>

      <h2>Add a new </h2>
      <PersonForm
        addNewName={addNewName}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        newName={newName}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      {
        persons
          ?<Persons persons={persons} filter={filter.toLowerCase()}/>
          :<p>test</p>
      }
    </div>
  )
}

export default App