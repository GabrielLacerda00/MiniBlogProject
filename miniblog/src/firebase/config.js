// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyVk4OEpu41lzExOWX1IUOGW921Gu2yqk",
  authDomain: "miniblog-3c1b5.firebaseapp.com",
  projectId: "miniblog-3c1b5",
  storageBucket: "miniblog-3c1b5.appspot.com",
  messagingSenderId: "613761794725",
  appId: "1:613761794725:web:3b9ccc14a0d8f42e5c834c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize DataBase
const db = getFirestore(app)

export {db};