
import { useState } from 'react';
import './App.css';
import { ListadoNotas } from './components/ListadoNotas';
import { InputNuevaNota } from './components/InputNuevaNota';

function App() {

  const [notas, setNotas] = useState(["hacer la compra de lo siguiente: "]);

  const addNuevaNota = (nuevaNota) => {
    setNotas([...notas, nuevaNota])
  }




  return (
    <div className="App">
      <h1>Bienvenido a la sesion 11</h1>
      <h3>Esto va a ser una aplicacion de notas</h3>
      <InputNuevaNota addNuevaNota={addNuevaNota} />
      <ListadoNotas notas = {notas} />
    </div>
  );
}

export default App;
