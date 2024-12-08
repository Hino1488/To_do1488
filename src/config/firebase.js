
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBICDajS2Y4NlrLSncwFLyhAI6YKSSdmBc",
  authDomain: "todo-40787.firebaseapp.com",
  projectId: "todo-40787",
  storageBucket: "todo-40787.appspot.com",
  messagingSenderId: "205627295946",
  appId: "1:205627295946:web:7e68067c5132f497b28c33",
  measurementId: "G-1XPPJYCG6N"
};


export const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;