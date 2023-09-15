import './App.css'
import Pages from './components/Pages'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchPage from './components/SearchPage';
import MovieDetail from './components/common/MovieDetail';
import Login from './components/common/Login';
import Register from './components/common/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Pages />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

