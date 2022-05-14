// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1670IYLt2OQL5bp7IDwk-HqGKBSBkuH0",
  authDomain: "th3shop-8d8a3.firebaseapp.com",
  projectId: "th3shop-8d8a3",
  storageBucket: "th3shop-8d8a3.appspot.com",
  messagingSenderId: "783933108625",
  appId: "1:783933108625:web:e7623229102dbda5cd6a30",
  measurementId: "G-SRZGCP7BF8"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);