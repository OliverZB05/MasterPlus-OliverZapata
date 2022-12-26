import React from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from './Components/NavBar/subcomponents/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a MarketPlus!, una de las mejores tiendas online"/>
    </div>
  );
}

export default App;
