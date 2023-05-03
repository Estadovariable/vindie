// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrH0hMSpuivNTBItX9oh77ntE6pbBrQf8",
  authDomain: "vindie-co.firebaseapp.com",
  projectId: "vindie-co",
  storageBucket: "vindie-co.appspot.com",
  messagingSenderId: "1049357968725",
  appId: "1:1049357968725:web:58b1481f3701e84bbafbdc",
  measurementId: "G-TSV854NXW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);