// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFQIEGVssWdXP-_AjM-Qp0LaQ8FNU9HTo",
  authDomain: "netflixgpt-656cb.firebaseapp.com",
  projectId: "netflixgpt-656cb",
  storageBucket: "netflixgpt-656cb.firebasestorage.app",
  messagingSenderId: "862211766770",
  appId: "1:862211766770:web:54dd0201e79f2446f6136b",
  measurementId: "G-EKB2DF34SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);