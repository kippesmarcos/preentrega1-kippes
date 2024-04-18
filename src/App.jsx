import React from 'react';
import CarWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a nuestra tienda" />
    </>
  );
}

export default App;
