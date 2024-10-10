import React, {useEffect, useState} from 'react'
import {v4 as uuid} from "uuid"
import Persons from './components/Persons'
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import Error from "./components/Error";
import personsService from "./services/persons"
import './index.css'

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
  const [errorMessage, setErrorMessage] = useState('')
  const [notification, setNotification] = useState('')

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

    const foundPerson = persons.find(el => el.name.toLowerCase() === newName.toLowerCase());

    if (!foundPerson) {
      personsService
        .create(nameObject)
        .then(setNewObject => {
          setPersons(persons.concat(setNewObject));
          setNewName('');
          setNewNumber('');

          setNotification(
            `Added user ${nameObject.name}`
          )
          setTimeout(() => {
            setNotification('')
          }, 3000)
        })


    } else {
      if (window.confirm(`${nameObject.name} is already added to phonebook, replace the old number with a new one?`)) {
        const id = foundPerson.id;

        personsService
          .updateNumber(id, nameObject.name, nameObject.number)
          .then(() => {
            setPersons(persons.map(person =>
              person.id === id ? { ...person, number: nameObject.number } : person
            ))
            setNewName('');
            setNewNumber('');
          })
      }
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Error message={errorMessage}/>
      <Notification message={notification}/>
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
          ?<Persons setPersons={setPersons} persons={persons} filter={filter.toLowerCase()} setErrorMessage={setErrorMessage} />
          :<p>test</p>
      }
    </div>
  )
}

export default App