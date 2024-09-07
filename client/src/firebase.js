// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "scholarships-blog.firebaseapp.com",
  projectId: "scholarships-blog",
  storageBucket: "scholarships-blog.appspot.com",
  messagingSenderId: "269411054869",
  appId: "1:269411054869:web:34a6f88f4ea7eac49e651c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
