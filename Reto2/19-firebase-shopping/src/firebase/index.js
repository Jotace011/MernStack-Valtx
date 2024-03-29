// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";




const vapidKeyProd = "BEvfBijzNeY5QWN8rQqOJ0EQTCIlw2o7kV4XoQ6NFuc4RZ5V0X7wgXEoKSAtRjgykdOUPt9S18ZUWFQsUrEzuH4"
const vapidKeyDev = "BErWOze1ZS8MRdECKzTaDWHFY6AuDekW4UBDfBw0A7FOU6WkjdHwELVSDxsN7O465npGlfeGkvbNgUfSKTtxx5A"

/* Current tokem :  fi4JPi3MC30F7UvPwn4E8t:APA91bFpwUE6usJgBEJ-XiuXIjFsO6zNPQ-YX2qB3-RBdz0cAOCmI-XbySi70au9Ym45AabkQYGS4q2u0RHNKy77JUM7BFuEwVy5gi4_18iFjjR8YCodsbwLCvvwD2tmaX8d_M3fbKmt
*/

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkfc3dfJ4AsXLukfWIuo-Lo_ZgW08Avro",
  authDomain: "fir-shopping-4fa3a.firebaseapp.com",
  projectId: "fir-shopping-4fa3a",
  storageBucket: "fir-shopping-4fa3a.appspot.com",
  messagingSenderId: "754424052499",
  appId: "1:754424052499:web:217211583683c35d8cb8e6"
};

const devFirebaseConfig = {
  apiKey: "AIzaSyAkjJ69QOtcE5exBa2XWDbMmo1HnFs8wSE",
  authDomain: "dev-tasklist-firebase-44f4f.firebaseapp.com",
  projectId: "dev-tasklist-firebase-44f4f",
  storageBucket: "dev-tasklist-firebase-44f4f.appspot.com",
  messagingSenderId: "858814944446",
  appId: "1:858814944446:web:c71abe46bc77540a297aef"
};

// Initialize Firebase
let app ;
if(process.env.NODE_ENV == 'production'){
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp(devFirebaseConfig)
}

export {
  app
}

export const messaging = getMessaging()

getToken(messaging, {vapidKey: process.env.NODE_ENV === 'production' ? vapidKeyProd : vapidKeyDev})
  .then(currentToken => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      //console.log('Current tokem : ', currentToken)
      sentTokenToServer(currentToken)
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  })

  const sentTokenToServer = token => {
    if(localStorage.getItem('tokenSendToServer')) return;
    //TO-DO: Implementar la logica que en el servidor se almacena el token
    console.log('Ha almacenado el token')
    localStorage.setItem('tokenSendToServer','1')
  }

  export const db = getFirestore(app);