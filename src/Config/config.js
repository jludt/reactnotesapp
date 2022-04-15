
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVKgHA0GNYwF7uW1Xzd-CB_I5GJastQyo",
  authDomain: "my-reactnotes-fb.firebaseapp.com",
  projectId: "my-reactnotes-fb",
  storageBucket: "my-reactnotes-fb.appspot.com",
  messagingSenderId: "7385707690",
  appId: "1:7385707690:web:dac04782d2faf68e580cd3",
  measurementId: "G-YBWFHDZN6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
