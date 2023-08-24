import React, { useEffect, useState } from 'react'
import MovieSearch from './Header/MovieSearch'
// import MoviesList from '../components/MoviesList'
import MovieHot from '../components/MovieHot/MovieHot'
import axios from 'axios';
import NavBar from './Home/NavBar';

const API_KEY = '629245c430726b8d51cef563512923c6';
const BASE_URL = 'https://api.themoviedb.org/3';

function Pages() {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
            .then(response => {
                setPopularMovies(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <MovieSearch />
            <MovieHot movies={popularMovies} />
            {/* <MoviesList popularMovies={popularMovies}/> */}
            <NavBar />
        </div>
    )
}

export default Pages