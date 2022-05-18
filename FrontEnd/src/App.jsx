import { useState } from 'react'
import logo from '/logo.svg'
import './App.css'
import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="enlace" to="/catala">Fes Click per començar</Link>
      </header>
    </div>
  )
}


export default App
