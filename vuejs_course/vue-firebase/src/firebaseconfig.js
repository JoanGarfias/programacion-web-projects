// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6EE3JfcUKnnYCB8BXk4FUEl_ZM8YKKN0",
  authDomain: "vue-retails.firebaseapp.com",
  projectId: "vue-retails",
  storageBucket: "vue-retails.firebasestorage.app",
  messagingSenderId: "574881260761",
  appId: "1:574881260761:web:3c4c870eb7eefd186e0ac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };