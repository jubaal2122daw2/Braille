/**
 * @description Componente principal de la aplicación. Dirige a la vista de Catalan
 */
import { useState } from 'react'
import logo from '/logo.svg'
import './App.css'
import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Link className="enlace" to="/catala"><img src={logo} className="App-logo" alt="logo" /></Link>
      </header>
    </div>
  )
}


export default App
