import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
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
  const [filter, setFilter] = useState('')
  const [allCountries, setAllCountries] = useState<Countries[]>([])
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setAllCountries(response.data)
      })
  }, []);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
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
        {allCountries.map((countries) => {
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