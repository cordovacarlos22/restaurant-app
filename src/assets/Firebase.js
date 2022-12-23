// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC8dUpdR3RLY02nj-YfYUYQubTlnEz6CI",
  authDomain: "restaurant-app-be38d.firebaseapp.com",
  projectId: "restaurant-app-be38d",
  storageBucket: "restaurant-app-be38d.appspot.com",
  messagingSenderId: "130141576466",
  appId: "1:130141576466:web:262a4144d25aa78f7767cb",
  measurementId: "G-TC9JT4NVJ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

export default db;

