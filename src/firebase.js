import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmLIv1C19LwO43TYymk8lTRZZYHmZzSqQ",
  authDomain: "clone-664be.firebaseapp.com",
  projectId: "clone-664be",
  storageBucket: "clone-664be.appspot.com",
  messagingSenderId: "58208125075",
  appId: "1:58208125075:web:6616ad63007e417f27cd66",
  measurementId: "G-6ZQQC4NLK9"
};

// Initialize the Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore and Auth instances
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Export the instances
export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };