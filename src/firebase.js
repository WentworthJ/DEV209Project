import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBicJ1ou-rxqiiie1mjA6UzIgB4As5dKNA",
  authDomain: "dev209-first-fire.firebaseapp.com",
  projectId: "dev209-first-fire",
  storageBucket: "dev209-first-fire.firebasestorage.app",
  messagingSenderId: "876029830227",
  appId: "1:876029830227:web:5e8661e7eb9539e5fa12a6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);