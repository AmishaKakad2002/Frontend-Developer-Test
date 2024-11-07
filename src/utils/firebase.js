// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeelp7umaYUWSP97-QDm1o_Ns03iUPHg4",
  authDomain: "netflixgpt-fa4fe.firebaseapp.com",
  projectId: "netflixgpt-fa4fe",
  storageBucket: "netflixgpt-fa4fe.firebasestorage.app",
  messagingSenderId: "255722986585",
  appId: "1:255722986585:web:19f459536a3704ae9d6548",
  measurementId: "G-Q48P5YX9X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();