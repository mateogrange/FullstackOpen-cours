// import ReactDOM from "react-dom/client"
// import React from 'react'
// import App from "./App"
//
// const rootElement = document.getElementById("root");
//
// if (rootElement) {
//   ReactDOM.createRoot(rootElement).render(
//       <App />
//   );
// } else {
//   console.error('No root element found');
// }

import ReactDOM from "react-dom/client"
import React from 'react';
import axios from 'axios'
import App from './App'

const rootElement = document.getElementById("root");
if (rootElement) {
  axios.get('http://localhost:3001/notes').then(response => {
    const notes = response.data;
    ReactDOM.createRoot(rootElement).render(<App />);
  });
} else {
  console.error("Element with id 'root' not found.");
}