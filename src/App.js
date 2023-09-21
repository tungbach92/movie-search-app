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

function App() {
  const [, setUser] = useAtom(userAtom)
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(user)
      } else {
        // User is signed out
        // ...
        setUser(null)
      }
    });
  },[])

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

export default App;
