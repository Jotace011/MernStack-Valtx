// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {collection, getDocs, getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWVgPrYmxUKPBEAUJdZlLge6POI1QfMmU",
  authDomain: "tasklist-firebase-f84fa.firebaseapp.com",
  projectId: "tasklist-firebase-f84fa",
  storageBucket: "tasklist-firebase-f84fa.appspot.com",
  messagingSenderId: "923704603415",
  appId: "1:923704603415:web:f6899cdb6cd71108053d52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const getNotesFromDB = async () => {
    const querySnapshot = await getDocs(collection(db, 'notes'))
    const notes = querySnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    })
    return notes

}