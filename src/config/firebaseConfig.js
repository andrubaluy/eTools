import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDuADPocahIvyofRrWZATPJ3ICrFj7b5hc",
  authDomain: "etools-eb072.firebaseapp.com",
  projectId: "etools-eb072",
  storageBucket: "etools-eb072.appspot.com",
  messagingSenderId: "331304882082",
  appId: "1:331304882082:web:d12b3c532a6a78a42b6cfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);