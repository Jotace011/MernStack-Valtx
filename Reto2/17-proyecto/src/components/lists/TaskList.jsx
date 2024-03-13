import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { addTask, getTasks, toggleComplete } from '../../firebase/tasksController';

const TaskList = ({ showSettings, setShowSettings }) => {

    const [newTask, setNewTask] = useState("");
    const [tasklist, setTasklist] = useState([]);
    
    useEffect(() => {
        getTasks()
            .then(tasks => setTasklist([...tasks]))
            .catch((e) => console.log(e))

    }, [])

    /**
     * Añade una nueva tarea a la lista
     * v2: La nueva tarea se añade como un objeto { task: nombre de la tarea, completed: si está completada o no}
     */

    const addNewTask = () => {
        if (newTask === "") return;
        //añadimos nueva tarea a db
        const task = {task: newTask, completed: false}
        addTask(task)
            .then(() => {
                //cuando se añade, se muestra todo
                return setTasklist([...tasklist, task]);
            })
            .catch(e => console.log(e))
            .finally(() => setNewTask(""))
    };

    /**
     * Función para chequear si la lista de tareas está vacía
     * @returns true si tasklist.length === 0
     */
    const isTasksEmpty = () => tasklist.length === 0;

    /**
     * Editar el nombre de la nueva tarea
     * @param {*} e - Evento de onChange proveniente de React
     */

    const editNewItem = (e) => setNewTask(e.target.value);

    /**
     * Función para eliminar una tarea en concreto
     * @param {*} index - Índice de la tarea a eliminar
     */

    const removeItem = (index) => {
        const newtasklist = tasklist.filter((t, i) => i !== index);
        setTasklist(newtasklist);
    };

    /**
     * Cambia el item por completado <-> pendiente
     * @param {*} index 
     */

    const toggleCompleteItem = (index) => {
        let task = tasklist.find(t => t.id === index)
        //Actualizar en bd el estado de la tarea
        toggleComplete(task)
            .then(async () => {
                const newTaskList = await getTasks()
                return setTasklist([...newTaskList,])
            })
            .catch((e) => console.log(e))
    };

    /**
     * Añade una nueva tarea cuando se presiona la tecla Enter
     * @param {*} e - Evento onKeyDown que proviene por defecto de React
     */

    const insertNewItemOnEnterKey = (e) => e.key === "Enter" && addNewTask();
    return (
        <>
            <header className='flex justify-between'>
                <h1 className='text-3xl text-sky-700 font-semibold dark:text-sky-300' >
                    Task List - hosting en Firebase
                </h1>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='btn'
                    onClick={() => setShowSettings(!showSettings)}>
                    {!showSettings ? "Show Settings" : "Hide Settings"}
                </motion.button>
            </header>

            <div className='my-4'>
                <input
                    className="shadow py-1 px-2 rounded-lg outline-none transition-all duration-300 
                                focus:ring-2 mr-2 dark:bg-slate-700 "
                    value={newTask}
                    onKeyDown={insertNewItemOnEnterKey}
                    onChange={editNewItem}
                    placeholder="New Task"
                    type="text"
                />
                <button
                    className="btn btn-add-task"
                    onClick={addNewTask}>
                    Create Task
                </button>
            </div>
            {isTasksEmpty() ? (
                <p>Task List is Empty</p>
            ) : (
                <ul className='todo-list'>
                    {tasklist.map((item, index) => (
                        <label>
                            <motion.li 
                                initial={{x:"100vh"}} 
                                animate={{x:0}} 
                                key={index}>
                                <input

                                    type="checkbox"
                                    // onClick={() => removeItem(index)}
                                    onClick={() => toggleCompleteItem(item.id)}
                                    checked={item.completed}
                                    onChange={() => { }}
                                />
                                <span className={`text-gray-800 ml-2 text-sm italic dark:text-gray-100
                                                ${item.completed && "line-through"}`}>
                                    {item.task}
                                </span>
                            </motion.li>
                        </label>
                    ))}
                </ul>
            )}
        </>
    );
};

export default TaskList