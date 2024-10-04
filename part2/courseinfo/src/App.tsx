import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

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
  const [nbCountrie, setNbCountrie] = useState([])

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

  return (
    <div>
      <h2>Countries</h2>
      <Filter handleFilter={handleFilter} filter={filter}/>
      {/*<div>*/}
      {/*  {allCountries.map((countries, index) => {*/}
      {/*      const countriesName = countries.name.common.toLowerCase()*/}
      {/*      if (countriesName.includes(filter.toLowerCase()))*/}
      {/*        return <li key={countries.cca2}>{countries.name.common}</li>*/}
      {/*    }*/}
      {/*  )}*/}
      {/*</div>*/}

      <div>
        {allCountries.map((countries, index) => {
          const countriesName = countries.name.common.toLowerCase()
          if (countriesName.includes(filter.toLowerCase())) {
            //stocker tout les pays dans {nbCountrie} pour pouvoir les compter avec .length
            console.log(countriesName) //voir comment compter le nombre de pays avec une boucle peut etre
            return (
              <li key={countries.cca2}>{countries.name.common}</li>
            )
          }
          }
        )}
      </div>

      {/*<div>*/}
      {/*  {allCountries.length < 10 ? 'test' :*/}

      {/*    allCountries.map((countries) =>*/}
      {/*      <div key={countries.cca2}>*/}
      {/*        <h2>{countries.name.common}</h2>*/}
      {/*        <p>capital: {countries.capital}</p>*/}
      {/*        <p>area: {countries.area} </p>*/}
      {/*        <b>languages:</b>*/}
      {/*        <div>*/}
      {/*          {countries.languages ? (*/}
      {/*            <ul>*/}
      {/*              {Object.entries(countries.languages).map(([key, value]:[string, string]) => (*/}
      {/*                <li key={key}>{value}</li>*/}
      {/*              ))}*/}
      {/*            </ul>*/}
      {/*          ): (*/}
      {/*            <ul>*/}
      {/*              <li>No languages define</li>*/}
      {/*            </ul>*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*        <div style={{ fontSize: '100px' }}>*/}
      {/*          {countries.flag}*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*</div>*/}
    </div>
  )
}

export default App