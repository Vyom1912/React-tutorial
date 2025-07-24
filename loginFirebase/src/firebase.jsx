// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0dLJph72GF-gifeGDr2bOQLLjYPPj7N4",
  authDomain: "first-firebase-auth-login-page.firebaseapp.com",
  projectId: "first-firebase-auth-login-page",
  storageBucket: "first-firebase-auth-login-page.appspot.com",
  messagingSenderId: "356489065095",
  appId: "1:356489065095:web:dfbae8dc7f5b5d85c67e22",
  measurementId: "G-8Q004XTHF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export { app, auth };
