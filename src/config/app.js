// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1o3cgAad0EpBqX6IuHe691NHfLcVd05s",
  authDomain: "queue-b4d38.firebaseapp.com",
  projectId: "queue-b4d38",
  storageBucket: "queue-b4d38.appspot.com",
  messagingSenderId: "842626672424",
  appId: "1:842626672424:web:e9f1820b1c66b0cf92121d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app