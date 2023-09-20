// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhF84_706s9mYOwFEEA8ROk6MpyybKenA",
  authDomain: "movie-search-app-e6581.firebaseapp.com",
  projectId: "movie-search-app-e6581",
  storageBucket: "movie-search-app-e6581.appspot.com",
  messagingSenderId: "1061909570833",
  appId: "1:1061909570833:web:98dcfbf28706aaa47b58b0",
  measurementId: "G-J1R6D1D9C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;