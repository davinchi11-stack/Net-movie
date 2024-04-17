// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBP1s-rbVyjRs2RyyIv-Id4sE3u4xzmcs",
    authDomain: "netmovies-6d172.firebaseapp.com",
    projectId: "netmovies-6d172",
    storageBucket: "netmovies-6d172.appspot.com",
    messagingSenderId: "899257357293",
    appId: "1:899257357293:web:27b9baf41c5b4c3fc5cde4",
    measurementId: "G-T0TPTDRYT7"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
// const analytics = getAnalytics(app);
