import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBOsp06DnBDX8M1Izh8ZhC_WplzBWHiOis",
  authDomain: "tiktok---jornada-cb2b9.firebaseapp.com",
  projectId: "tiktok---jornada-cb2b9",
  storageBucket: "tiktok---jornada-cb2b9.appspot.com",
  messagingSenderId: "864191149964",
  appId: "1:864191149964:web:9ed3f704c92be2a73648a9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;