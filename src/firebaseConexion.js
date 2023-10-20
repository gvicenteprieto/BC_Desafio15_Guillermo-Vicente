import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeeiHk3iLycJJBHQr_Rm18_k7lqsV36go",
  authDomain: "crud-inventario-react-firebase.firebaseapp.com",
  projectId: "crud-inventario-react-firebase",
  storageBucket: "crud-inventario-react-firebase.appspot.com",
  messagingSenderId: "20629557528",
  appId: "1:20629557528:web:060aac5354923d6495ce6d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

