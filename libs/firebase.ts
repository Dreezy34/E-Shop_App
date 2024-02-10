// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCexFeYOk9mLpTqIkLNPqk1sR1qz1b6kWg",
  authDomain: "e-shop-81c7c.firebaseapp.com",
  projectId: "e-shop-81c7c",
  storageBucket: "e-shop-81c7c.appspot.com",
  messagingSenderId: "638145288487",
  appId: "1:638145288487:web:0bc1f8f79745319a3d3102"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp