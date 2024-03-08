importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

 firebase.initializeApp({
    apiKey: "AIzaSyDkfc3dfJ4AsXLukfWIuo-Lo_ZgW08Avro",
    authDomain: "fir-shopping-4fa3a.firebaseapp.com",
    projectId: "fir-shopping-4fa3a",
    storageBucket: "fir-shopping-4fa3a.appspot.com",
    messagingSenderId: "754424052499",
    appId: "1:754424052499:web:217211583683c35d8cb8e6"
  });
 
  const messaging = firebase.messaging();

//   messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//       body: 'Background Message body.',
//       icon: '/firebase-logo.png'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });