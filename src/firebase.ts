// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkwJHwLEolo4TUjL8HpKEfzUZgSgAD8ZU",
  authDomain: "findenelev.firebaseapp.com",
  projectId: "findenelev",
  storageBucket: "findenelev.appspot.com",
  messagingSenderId: "416682451609",
  appId: "1:416682451609:web:374d934a5f15ae66594e08",
  measurementId: "G-2PVX684PSE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
