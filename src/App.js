import React from 'react';
import './App.css';
import Header from './components/header/header.js'; 
import  Presentacion from './components/cover/presentacion.js';
import Servicios from './components/servicios/servicios.js'


function App() {
  return (
    <body >
      <Header />
      <Presentacion/>
      <Servicios/>
      <Footer />
    </body>
   
  );
}

export default App;
