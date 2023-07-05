// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACX6TzcF1YkWp2Pf9NKmgWZsodu4RKsdI",
  authDomain: "react-netflix-clone-proj-363e7.firebaseapp.com",
  projectId: "react-netflix-clone-proj-363e7",
  storageBucket: "react-netflix-clone-proj-363e7.appspot.com",
  messagingSenderId: "376960907143",
  appId: "1:376960907143:web:8b947f00ab6d6635e48522",
  measurementId: "G-413VDLZZ01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);