import axios from 'axios';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react'
import { searchAtom } from '../store/search.atom';

const API_KEY = '629245c430726b8d51cef563512923c6';
const BASE_URL = 'https://api.themoviedb.org/3';

const usePopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [search] = useAtom(searchAtom);
    console.log(popularMovies);
    // hiển thị các genre_ids trong mảng 
    // console.log(new Set(popularMovies?.map(item=>item.genre_ids).flat()));
    useEffect(() => {
        fetchMovies();
    }, []);

    // lấy data set vào popularMovies
    const fetchMovies = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
            if (data?.results?.length) {
                setPopularMovies(data.results);
                return data.results
            }
            return []
        } catch (e) {
            console.error('Error fetching data:', e.toString());
            return []
        }
    }

    useEffect(() => {
        if (!search) {
            fetchMovies()
            return;
        } else fetchNewMovies();
    }, [search])

    const fetchNewMovies = async () => {
        // xu ly mang voi foreach
        const allMovies = await fetchMovies()
        const movies = [];

        allMovies.forEach(movie => {
            // neu seach data co trong title thi push vao mang movies
            if (movie.title.includes(search)) {
                movies.push(movie);
            }
        })

        setPopularMovies(movies)

        // const movies = popularMovies.map(movie => {
        //     if (movie.title.includes(search)) 
        //         return movie

        //     return null;
        // }).filter(x => x)

        // return movies
    }
    return { popularMovies }
}

export default usePopularMovies