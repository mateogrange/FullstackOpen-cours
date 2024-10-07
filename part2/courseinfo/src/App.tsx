import React from 'react'
import { useState, useEffect } from 'react'
import axios, {all} from 'axios'
import Filter from "./components/Filter";
import Countries from "./components/Countries";

interface Countries {
  cca2: string;
  name: {
    common: string;
  };
  capital: string[];
  area: number;
  languages: {
    [key: string]: string
  };
  flag: string;
}

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
  const [allCountries, setAllCountries] = useState<Countries[]>([])
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setAllCountries(response.data)
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

    const found = persons.some(el => el.name.toUpperCase() === newName.toUpperCase())

    if(!found){
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(newName + ' is already added to phonebook')
    }
  }

  const filterCountries = () => {
    return allCountries.filter((countries) => {
      const countriesName = countries.name.common.toLowerCase();
      return countriesName.includes(filter.toLowerCase());
    });
  };

  return (
    <div>
      <h2>Countries</h2>
      <Filter handleFilter={handleFilter} filter={filter}/>
      <div>
        {allCountries.map((countries, index) => {
            const countriesName = countries.name.common.toLowerCase()
            if (filterCountries().length === 1) {
              if (countriesName.includes(filter.toLowerCase())) {
                return (
                  <Countries countrie={countries}/>
                )
              }
            } else if (filterCountries().length <= 10) {
              if (countriesName.includes(filter.toLowerCase())) {
                return (
                  <li key={countries.cca2}>{countries.name.common}</li>
                )
              }
            }
          }
        )}
      </div>
    </div>
  )
}

export default App