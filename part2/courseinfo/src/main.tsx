import ReactDOM from 'react-dom/client'
import React from "react";
import axios from 'axios'

import App from './App'



if(document.getElementById('root')) {
  axios.get('http://localhost:3001/notes').then(response => {
    const notes = response.data
    const rootElement = document.getElementById("root");

    if (rootElement)
      ReactDOM.createRoot(rootElement).render(<App notes={notes} />)
  })
} else {
  console.error('no root elemet found')
}