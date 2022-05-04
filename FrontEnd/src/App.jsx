import { useState } from 'react'
import logo from '../assets/logo.svg'
import './App.css'
import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="enlace" to="/idiomas">Haz click para continuar</Link>
      </header>
    </div>
  )
}


export default App
