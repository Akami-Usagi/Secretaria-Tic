// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-tEyBr187oKdHJ1eV6WpA7qJYH5Qg2Y4",
    authDomain: "secretaria-tic.firebaseapp.com",
    projectId: "secretaria-tic",
    storageBucket: "secretaria-tic.appspot.com",
    messagingSenderId: "765544253687",
    appId: "1:765544253687:web:887350ad1c19f2d6522bf2",
    measurementId: "G-GKBR3JD5EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)