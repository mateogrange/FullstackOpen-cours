import React from "react";

interface Languages {
  [key: string]: string;
}

interface Country {
  cca2: string;
  name: {
    common : string;
  };
  capital: string;
  area: number;
  languages: Languages;
  flag: string;
}


interface CountriesProps {
  countrie: Country;
}

const Countries: React.FC<CountriesProps> = ({countrie}) => {
  return (
    <div key={countrie.cca2}>
      <h2>{countrie.name.common}</h2>
      <p>capital: {countrie.capital}</p>
      <p>area: {countrie.area} </p>
      <b>languages:</b>
      <div>
        {countrie.languages ? (
          <ul>
            {Object.entries(countrie.languages).map(([key, value]: [string, string]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        ) : (
          <ul>
            <li>No languages define</li>
          </ul>
        )}
      </div>
      <div style={{fontSize: '100px'}}>
        {countrie.flag}
      </div>
    </div>
  )
}

export default Countries