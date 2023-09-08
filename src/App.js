import './App.css'
import Pages from './components/Pages'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchPage from './components/SearchPage';
import MovieDetail from './components/common/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Pages />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/detail" element={<MovieDetail />} />
          <Route path="movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

