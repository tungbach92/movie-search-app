// HighRatedMoviesList.js
import React, { useState, useEffect } from 'react';
import MovieItem from '../common/MovieItem';

function MovieHot({ movies }) {

    const [highRatedMovies, setHighRatedMovies] = useState([]);

    useEffect(() => {
        if (movies && movies.length) {
            // Lọc và sắp xếp danh sách các phim theo vote_average
            const filteredMovies = movies.filter(movie => movie.adult === false);
            const sortedMovies = filteredMovies.sort((a, b) => b.vote_average - a.vote_average);

            // Lấy 4 phim có vote_average cao nhất
            const topRatedMovies = sortedMovies.slice(0, 4);
            setHighRatedMovies(prev => topRatedMovies);
        }
    }, [movies]);

    return (
        <div className='pt-[64px]' >
            <h1 className='text-center mt-6 font-medium text-white'> TOP 4 BỘ PHIM CÓ ĐÁNH GIÁ CAO NHẤT </h1>

            <div className='flex gap-5 justify-center mt-8 '>
                {highRatedMovies.map(movie => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MovieHot


    // const filteredMovies = movies.filter(movie => movie.adult === false);
    // const sortedMovies = filteredMovies.sort((a, b) => b.vote_average - a.vote_average);

    // const topRatedMovies = sortedMovies.slice(0, 4);
    // const highRatedMovies = topRatedMovies