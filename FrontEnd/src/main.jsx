import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Idiomas from './routes/idiomas';
import Espanyol from './routes/espanyol';

//strict mode es para detectar fallos en ls hijos mientras vas desarrollando
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='idiomas' element={<Idiomas />} />
        <Route path='espanyol' element={<Espanyol />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
