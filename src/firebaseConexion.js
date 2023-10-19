/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeeiHk3iLycJJBHQr_Rm18_k7lqsV36go",
  authDomain: "crud-inventario-react-firebase.firebaseapp.com",
  projectId: "crud-inventario-react-firebase",
  storageBucket: "crud-inventario-react-firebase.appspot.com",
  messagingSenderId: "20629557528",
  appId: "1:20629557528:web:060aac5354923d6495ce6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

