// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0XEVPI4nCsG8_1JbfoneKOQVCO2e30cs",
  authDomain: "netflix-react-3ba58.firebaseapp.com",
  projectId: "netflix-react-3ba58",
  storageBucket: "netflix-react-3ba58.appspot.com",
  messagingSenderId: "436213831020",
  appId: "1:436213831020:web:ce80f2cfe417d549ad4f49",
  measurementId: "G-HPBGYP4JVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

