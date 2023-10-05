import React, { useEffect } from 'react';
import './App.css';
import Pages from './components/Pages';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchPage from './components/SearchPage';
import MovieDetail from './components/common/MovieDetail';
import Login from './components/common/Login';
import Register from './components/common/Register';
import Logout from './components/common/Logout';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebaseConfig';
import { useAtom } from 'jotai';
import { userAtom } from './store/user.atom';
import  Profile from './components/Profile/Profile'

function App() {
  const [, setUser] = useAtom(userAtom)

  // khi request k bị logout
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user)
  //     } else {
  //       setUser(null)
  //     }
  //   });
  // },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Pages />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
