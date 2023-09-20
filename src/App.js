import React from 'react';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig'; // Import tệp cấu hình Firebase của bạn
import Pages from './components/Pages';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchPage from './components/SearchPage';
import MovieDetail from './components/common/MovieDetail';
import Login from './components/common/Login';
import Register from './components/common/Register';
import Logout from './components/common/Logout';

// Khởi tạo Firebase app bằng cấu hình Firebase của bạn
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Truy cập vào auth provider và thiết lập các tùy chọn xác thực
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Pages />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
