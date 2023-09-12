//  Component hiển thị chi tiết về một bộ phim khi được chọn.

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import usePopularMovies from '../../hooks/usePopularMovies';

function MovieDetail() {
    
    const { id } = useParams();                     // lay id tu url
    const { popularMovies } = usePopularMovies();   // lay popularMovies

    const [movie, setMovie] = useState('');         // tao state movie, tu id va popularMovies 

    useEffect(() => {
        // Tìm phim dựa trên id trong danh sách popularMovies
        const foundMovie = popularMovies.find((m) => m.id.toString() === id);

        if (foundMovie) {
            setMovie(foundMovie);
        } else {
            // 
        }
    }, [id, popularMovies]);

    return (
        <div className='flex m-10 gap-6'>
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />

            <div className="flex flex-col p-4 text-justify">
                <h6 className="text-2xl mb-3"> {movie.title} </h6>
                <p className="text-sm"> Release Date: {movie.release_date} </p>
                <p className="text-sm"> Overview: {movie.overview} </p>
                <p className="text-sm"> Rating: {movie.vote_average} </p>
                <p className="text-sm"> Review: {movie.vote_count} </p>
            </div>
        </div>
        
    );
}

export default MovieDetail