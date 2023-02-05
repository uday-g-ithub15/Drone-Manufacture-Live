// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr-bkdFvanqbsSmvS5Ai84dCPHjG360jo",
    authDomain: "dronemanufacture-ea830.firebaseapp.com",
    projectId: "dronemanufacture-ea830",
    storageBucket: "dronemanufacture-ea830.appspot.com",
    messagingSenderId: "746433186839",
    appId: "1:746433186839:web:570b39946202ffe1af2052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;