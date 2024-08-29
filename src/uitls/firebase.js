// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxcghfjCWapJMT1nQ06vy-SHt_k-_NOVU",
  authDomain: "netflixgpt-asgar.firebaseapp.com",
  projectId: "netflixgpt-asgar",
  storageBucket: "netflixgpt-asgar.appspot.com",
  messagingSenderId: "132496897984",
  appId: "1:132496897984:web:26083398d2e07a55a17a25",
  measurementId: "G-MY6X3YZ4V7"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);