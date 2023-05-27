// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8Qtt4_ejV3fX9Db0rE_u5bdSYIXKZpoQ",
  authDomain: "flap-df663.firebaseapp.com",
  projectId: "flap-df663",
  storageBucket: "flap-df663.appspot.com",
  messagingSenderId: "587619535530",
  appId: "1:587619535530:web:b3244e6634fb4289bcded3",
  measurementId: "G-Y26EGMYBMB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const database= getDatabase(app)