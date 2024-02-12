import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCeVu1XXS5y0e6A9fP1_K5d41ujsfB3gfU",
  authDomain: "house-marketplace-app-79666.firebaseapp.com",
  projectId: "house-marketplace-app-79666",
  storageBucket: "house-marketplace-app-79666.appspot.com",
  messagingSenderId: "153150341105",
  appId: "1:153150341105:web:21451ecd2ee074bb31ce50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();