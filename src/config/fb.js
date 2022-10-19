// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Hqfuer92vNwNB6aMDNXAav1YlWIVV9Y",
  authDomain: "kompari-155c0.firebaseapp.com",
  projectId: "kompari-155c0",
  storageBucket: "kompari-155c0.appspot.com",
  messagingSenderId: "433442136655",
  appId: "1:433442136655:web:69157a5a800625f5da803a"
};

// if(firebase.apps.length){
    firebase.initializeApp(firebaseConfig);

// }

export {firebase}
// Initialize Firebase
