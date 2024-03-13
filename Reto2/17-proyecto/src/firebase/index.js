// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWVgPrYmxUKPBEAUJdZlLge6POI1QfMmU",
  authDomain: "tasklist-firebase-f84fa.firebaseapp.com",
  projectId: "tasklist-firebase-f84fa",
  storageBucket: "tasklist-firebase-f84fa.appspot.com",
  messagingSenderId: "923704603415",
  appId: "1:923704603415:web:f6899cdb6cd71108053d52"
};

const developmentFirebaseConfig = {
  apiKey: "AIzaSyAkjJ69QOtcE5exBa2XWDbMmo1HnFs8wSE",
  authDomain: "dev-tasklist-firebase-44f4f.firebaseapp.com",
  projectId: "dev-tasklist-firebase-44f4f",
  storageBucket: "dev-tasklist-firebase-44f4f.appspot.com",
  messagingSenderId: "858814944446",
  appId: "1:858814944446:web:c71abe46bc77540a297aef"
};



// Initialize Firebase
let app;
if(process.env.NODE_ENV === "production") {
  app = initializeApp(firebaseConfig)
} else {
  app = initializeApp(developmentFirebaseConfig)
}

//Inicializar Firestore
const db = getFirestore()


export {
  app,
  db
}
