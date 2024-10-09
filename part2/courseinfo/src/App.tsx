import React, {useEffect, useState} from 'react'
import {v4 as uuid} from "uuid"
import Persons from './components/Persons'
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personsService from "./services/persons"

interface PersonsInt {
  id: string;
  name: string;
  number: string;
}

interface PropsApp {
  persons: PersonsInt[];
}

const App: React.FC<PropsApp> = ({persons: initPersons}) => {
  const [persons, setPersons] = useState<PersonsInt[]>(initPersons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(true)

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
      id:  uuid(),
    }

    const found = persons.some(el => el.name.toLowerCase() === newName.toLowerCase())

    if(!found) {
      personsService
        .create(nameObject)
        .then(setNewObject => {
            setPersons(persons.concat(setNewObject))
          setNewName('')
          setNewNumber('')
        })
    } else {
      if (window.confirm(`${nameObject.name} is already added to phonebook, replace the old number with a new one?`)) {

        console.log(newName, newNumber)

        personsService
          .getId(newName)
          .then((response) => {
            console.log(response.data[0].id)
            setLoading(false)
          })

        if (!loading) {
          personsService
            .updateNumber(id, nameObject.name, nameObject.number)
            .then(() => {
              console.log(nameObject)
            })
        }

      }
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
          ?<Persons setPersons={setPersons} persons={persons} filter={filter.toLowerCase()}/>
          :<p>test</p>
      }
    </div>
  )
}

export default App