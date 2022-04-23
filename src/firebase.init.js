// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqyAZTHeq4iEYmMzCEeJLjXGURx4gd00Y",
    authDomain: "geniusccarservices.firebaseapp.com",
    projectId: "geniusccarservices",
    storageBucket: "geniusccarservices.appspot.com",
    messagingSenderId: "792368927083",
    appId: "1:792368927083:web:ef6504ede291020b26bc2e",
    measurementId: "G-2P8RWXE7Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;