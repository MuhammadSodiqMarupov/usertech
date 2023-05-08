import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBBmZQ8JOrb6yRYAaTROmZKb4NhtDdDYBM",
  authDomain: "usertech-c063b.firebaseapp.com",
  projectId: "usertech-c063b",
  storageBucket: "usertech-c063b.appspot.com",
  messagingSenderId: "867782711888",
  appId: "1:867782711888:web:e718e080c598ecbb920f55"
};

const app = initializeApp(firebaseConfig);
export const dbAuth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)