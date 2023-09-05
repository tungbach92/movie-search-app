import axios from 'axios';
import { useEffect, useState } from 'react'

const API_KEY = '629245c430726b8d51cef563512923c6';
const BASE_URL = 'https://api.themoviedb.org/3';

const usePopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    // hiển thị các genre_ids trong mảng 
    console.log(new Set(popularMovies?.map(item=>item.genre_ids).flat()));

    useEffect(() => {
        axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
            .then(response => {
                setPopularMovies(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return { popularMovies }
}

export default usePopularMovies