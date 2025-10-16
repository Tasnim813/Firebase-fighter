// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0crYUKqaIg8nt6fAO6ORSLuiuyxkHJDI",
  authDomain: "fir-fighter-concept.firebaseapp.com",
  projectId: "fir-fighter-concept",
  storageBucket: "fir-fighter-concept.firebasestorage.app",
  messagingSenderId: "293486105291",
  appId: "1:293486105291:web:52e9e753c57926edff414e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);