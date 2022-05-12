// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBsmpvYYKw7Dchxp-nVSUBFusVur9I0tG8",

  authDomain: "ia--clone.firebaseapp.com",

  projectId: "ia--clone",

  storageBucket: "ia--clone.appspot.com",

  messagingSenderId: "940712210459",

  appId: "1:940712210459:web:44a2f740f2be3f9b4908be",

  measurementId: "G-SK5MP242BE"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);