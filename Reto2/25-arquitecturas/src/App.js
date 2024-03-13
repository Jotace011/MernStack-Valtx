
import { useEffect, useState } from 'react';
import './App.css';
import { getNotes } from './controllers/frontController';
import Notes from './front/Notes'
import AtomicDesign from './front/AtomicDesign';

function App() {

  const [notes, setNotes] = useState([])
  useEffect(() => {
    getNotes()
      .then(n => setNotes(n))
      .catch(e => console.log(e))
  }, [])


  return (
    <div className="App">
      <h1>Bienvenido a Notas</h1>
      <AtomicDesign/>
      {/* <Notes notes={notes} /> */}
    </div>
  );
}

export default App;
