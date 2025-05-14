// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaUzhs7XFZCyNtVoivO2h67NCCk8fkdDQ",
  authDomain: "innoape.firebaseapp.com",
  projectId: "innoape",
  storageBucket: "innoape.firebasestorage.app",
  messagingSenderId: "827388912966",
  appId: "1:827388912966:web:8c34ba2aea8a69cb5c3147",
  measurementId: "G-E88QJKLGEZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
