import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Idiomas from './routes/idiomas';
import Espanyol from './routes/espanyol';
import Catalan from './routes/catalan';
import Abece from './routes/abece';
import Camara from './routes/camara';
import Letra from './routes/letra';

//strict mode es para detectar fallos en ls hijos mientras vas desarrollando
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='idiomas' element={<Idiomas />} />
        <Route path='espanyol' element={<Espanyol />} />
        <Route path='catala' element={<Catalan />} />
        <Route path='abecedario' element={<Abece />} />
        <Route path='camara' element={<Camara />} />
        <Route path='letra' element={<Letra />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
)

//CUIDADO, QUITAR EL STRICT MODE PARA QUE FUNCIONE EN PRODUCCION (NO EN DESARROLLO) CARGA DOS VECES CIERTOS COMPONENTES.
