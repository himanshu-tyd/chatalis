// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARJwFkZtE28OAMNpDFjc8YCiW7aVTkrN0",
  authDomain: "chatalis.firebaseapp.com",
  projectId: "chatalis",
  storageBucket: "chatalis.appspot.com",
  messagingSenderId: "566584327939",
  appId: "1:566584327939:web:dc460c96d83f89bbe07336",
  measurementId: "G-L6QF8W1QJN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};
