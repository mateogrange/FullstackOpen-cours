import {useState, useEffect} from 'react'
import axios, {AxiosResponse} from 'axios'
import React from 'react'

interface Persons {
  name: string;
  number: string;
  id: number;
}

const App = () => {
  const [persons, setPersons] = useState<Persons[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, []);

  console.log(persons)

  return (
    <div>
      <h1>Persons</h1>
        <ul>
          {persons.map(person =>
            <li key={person.id}> {person.name} {person.number}</li>
          )}
        </ul>
    </div>
  )
}

export default App