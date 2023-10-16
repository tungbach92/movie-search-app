import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


export const firebaseConfig  = {
  apiKey: "AIzaSyDhF84_706s9mYOwFEEA8ROk6MpyybKenA",
  authDomain: "movie-search-app-e6581.firebaseapp.com",
  projectId: "movie-search-app-e6581",
  storageBucket: "movie-search-app-e6581.appspot.com",
  messagingSenderId: "1061909570833",
  appId: "1:1061909570833:web:98dcfbf28706aaa47b58b0",
  measurementId: "G-J1R6D1D9C4"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firebase Authentication và lấy tham chiếu đến dịch vụ
export const auth = getAuth(app);
export const storage = getStorage(app);

