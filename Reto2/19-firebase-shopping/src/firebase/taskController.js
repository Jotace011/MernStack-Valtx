import { db } from "./index";
import {  collection, addDoc, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore"; 

//En este fichero crearemos la logica de bd para las tasks
export const addNewTask = async task => {
  await addDoc(collection(db, "tasks"), task)
    
}

export const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    // querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    // });

    const tasks = querySnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    })

    return tasks;
}

export const updateTask = async (task) => {
    //console.log(task)
    await setDoc(doc(db, 'tasks', task.id),{
        title: task.title,
        description: task.description
    })
}

export const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id))
}