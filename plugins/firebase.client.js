// plugins/firebase.client.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1P71LpxDkjv1xeJgpcBcHvlRcnHdGPx0",
  authDomain: "wedding-invitation-websi-f1aee.firebaseapp.com",
  projectId: "wedding-invitation-websi-f1aee",
  storageBucket: "wedding-invitation-websi-f1aee.firebasestorage.app",
  messagingSenderId: "861533203393",
  appId: "1:861533203393:web:1759ed3ead38aaba909d40",
  measurementId: "G-WJBL8F8VJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      db,
    },
  };
});
