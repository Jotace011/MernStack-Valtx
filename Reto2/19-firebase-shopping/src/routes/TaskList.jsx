import React, { useCallback, useContext, useEffect, useState } from 'react'
import { db } from '../firebase'
import { addNewTask, deleteTask, getTasks, updateTask } from '../firebase/taskController'
import { AppContext } from '../App'


const task = {
    title: "Este es el titulo",
    description: "Esta es la descripcion"
}

const TaskList = () => {

    // const [title, setTitle] = useState("")
    // const [description, setDescription] = useState("")
    const [task, setTask] = useState({title: "", description: ""})
    const [tasks, setTasks] = useState([])
    const [mode, setMode] = useState('add')
    const {user} = useContext(AppContext)

    const createNewTask = async () => {
        console.log(task)
        await addNewTask(task).catch(e => console.log(e))
        setTask({title: "", description: ""})
        reload()
    }

    
    const updateExistingTask = async () => {
        await updateTask(task)
        setTask({title: "", description: ""})
        reload()
        setMode('add')
    }

    const editTask = (id) => {
        setMode('update')
        const taskToEdit = tasks.find((t) => t.id === id)
        setTask({...taskToEdit})
        console.log(taskToEdit)
    }

    const removeTask = async (id) => {
        await deleteTask(id)
        reload()
    }

    const reload = () => {
        getTasks()
            .then((t) => setTasks([...t]))
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        reload()
    },[])

    return (
        <div>
            <h1 className='text-sky-700 font-semibold text-lg'>Tasklist</h1>
            <div className='flex flex-col gap-4'>
                <h2>Introduce una nueva tarea</h2>
                <input 
                    type='text' 
                    placeholder='Titulo'
                    className='border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full title-input'
                    value={task.title} 
                    disabled={!user}
                    onChange={(e) => setTask({...task, title: e.target.value}) }
                />
                <textarea 
                    type='text' 
                    placeholder='Descripcion'
                    className='border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full desc-input'
                    value={task.description} 
                    disabled={!user}
                    onChange={(e) => setTask({...task, description: e.target.value}) }
                />
               
                <button 
                    className='bg-sky-400 text-white rounded shadow py-1 hover:bg-sky-500 transition font-semibold disabled:bg-sky-200'
                    onClick={() => mode === 'add' ? createNewTask() : updateExistingTask()}
                    disabled={!user}
                >
                    {mode === 'add' ? "Añadir" : "Actualizar"}
                </button>
            </div>
         
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                {tasks.map((task) => (
                <div key={task.id} 
                    className='rounded-lg border border-sky-300 p-4 flex flex-col gap-2 '
                >
                    <h1 className='font-semibold'>{task.title}</h1>
                    <div className='border-t border-sky-300'></div>
                    <p>{task.description}</p>
                    <div className='flex justify-between '>
                        <button 
                            className='bg-sky-400 text-white py-1 px-2 rounded'
                            onClick={() => editTask(task.id)}
                        >
                            Editar
                        </button>
                        <button 
                            className='bg-red-600 text-white py-1 px-2 rounded'
                            onClick={() => window.confirm("Estas seguro? ") && deleteTask(task.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
                ))}
            </div>
            {!user && 
                <p className='text-red-600'>
                    Necesitas estar logeado para añadir tareas 
                </p>}
        </div>
    )
}

export default TaskList