import './App.css';
import * as React from "react"

type AppProps = {
  saludo: string,
  numero?: number
}

function App( props: AppProps): React.Node {

  const [darkMode, setDarkMode] = React.useState(false)
  
    /**
   * 
   *  
   * @returns - Cambia el modo de light -> dark y viceversa 
   */

  const toggleDark = () =>setDarkMode(!darkMode)

  const [taskList, setTaskList] = React.useState([])

  const [newTask, setNewTask] = React.useState("")

  /**
   * Esta funcion cambia el estado newTask a traves del input
   * @param {*} e- Evento de chhange proveniente de react
   * 
   * 
   */

  const handleChange = e => setNewTask(e.target.value)

  /**
   * Esta funcion añade el nuevo elemento a la lista
   * @returns 
   */

  const addNewTask = () => setTaskList([...taskList, newTask])

  /**
   * Esta funcion devuelve true si lista esta vacia 
   * 
   * @returns 
   */

  const tasklistEmpty = () => taskList.length === 0
  
  return (
    <div className={`App ${darkMode && "dark"}`}>
      <h1>{props.saludo}</h1>
      <button className='toggleDark' onClick={toggleDark}>
        Cambiar modo
      </button>
      <h2>Task Lists</h2>
      <div>
        <input type='text' value={newTask} onChange={handleChange} />
        <button className='toggleDark' onClick={addNewTask}>
          Añadir
        </button>
        <div>
          {tasklistEmpty() ?<h3>La lista de tareas está vacía</h3> : taskList.map((task, i) => <p key={i}>{task}</p>)}
        </div>
      </div>
    </div>
  );
}

export default App;
