import { db } from "./index";
import {  collection, addDoc, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore"; 

//En este fichero crearemos la logica de bd para las tasks
export const addNewTask = async task => {
  await addDoc(collection(db, "task"), task)
    
}

export const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "task"));
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
    await setDoc(doc(db, 'task', task.id),{
        title: task.title,
        description: task.description
    })
}

export const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'task', id))
}