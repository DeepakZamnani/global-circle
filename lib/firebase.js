// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC3-UTxJ54985eAlLGvuZIc69nYh5cWLw",
  authDomain: "global-circle-8e8d1.firebaseapp.com",
  projectId: "global-circle-8e8d1",
  storageBucket: "global-circle-8e8d1.firebasestorage.app",
  messagingSenderId: "377222822654",
  appId: "1:377222822654:web:01b57ea1e57816fd6d03af",
  measurementId: "G-60S00YJ2T0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);