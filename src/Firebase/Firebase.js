// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2a_6grcM6GVXsZybprDSPfRt1QbT6lgc",
  authDomain: "burger-restaurant-b1c0d.firebaseapp.com",
  projectId: "burger-restaurant-b1c0d",
  storageBucket: "burger-restaurant-b1c0d.appspot.com",
  messagingSenderId: "1054877236915",
  appId: "1:1054877236915:web:1adcf5be3bb13b671bbac6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
