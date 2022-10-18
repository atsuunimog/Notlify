// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp_Uyam9Idi4ivtyMwpydIp8r5Vn68S70",
  authDomain: "notlify-dec29.firebaseapp.com",
  projectId: "notlify-dec29",
  storageBucket: "notlify-dec29.appspot.com",
  messagingSenderId: "46572800429",
  appId: "1:46572800429:web:46228d4384c9186be9b924",
  measurementId: "G-YXKJKCGQ55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);