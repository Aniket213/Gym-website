import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';          // for authentication
import { getDatabase } from "firebase/database";  // for database usage


const firebaseConfig = {
  apiKey: "AIzaSyABKjrA6IRRFuphgRZMdqf62FQrzGNaXqc",
  authDomain: "gym-website-fe3f8.firebaseapp.com",
  projectId: "gym-website-fe3f8",
  storageBucket: "gym-website-fe3f8.appspot.com",
  messagingSenderId: "722791734685",
  appId: "1:722791734685:web:7ad82f07a0cb4bcd7b6374",
  measurementId: "G-T4BGDKBT9G"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);