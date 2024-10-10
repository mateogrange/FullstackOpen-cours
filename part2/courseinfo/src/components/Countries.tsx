import React, {useEffect, useState} from "react";
import axios from "axios";

interface Languages {
  [key: string]: string;
}

interface WeatherData {
  main: {
    temp: number;
  },
  wind: {
    speed: number;
  },
  weather:[
    Object:{
      icon: string;
    }
  ]
}

interface Country {
  cca2: string;
  name: {
    common : string;
  };
  capital: string[];
  area: number;
  languages: Languages;
  flag: string;
}


interface CountriesProps {
  countrie: Country;
}

const Countries: React.FC<CountriesProps> = ({countrie}) => {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [imgUrl, setImgUrl] = useState('')
  // @ts-ignore
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${countrie.capital}&appid=${apiKey}&units=metric`)
      .then((response) => {
        setWeather(response.data)
        setImgUrl(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
      })
  }, [countrie.capital]);

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
      <div style={{fontSize: '150px'}}>
        {countrie.flag}
      </div>
      <div>
        <h2>Weather in {countrie.name.common}</h2>
        {weather && weather.main.temp? (
            <p>Temperature: {weather.main.temp} Celsius</p>

          ) : (
            <p>no data</p>
          )
        }

        {weather && weather.main.temp? (
          <img alt={imgUrl} src={imgUrl}/>
        ) : (
          <p>no data</p>
        )
        }

        {weather && weather.wind.speed? (
            <p>Wind: {weather.wind.speed} m/s</p>
          ) : (
            <p>no data</p>
          )
        }
      </div>
    </div>
  )
}

export default Countries