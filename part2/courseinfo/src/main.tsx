import ReactDOM from "react-dom/client"
import React from 'react'
import App from "./App.js"

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    // @ts-ignore
    <App />
  );
} else {
  console.error('No root element found');
}