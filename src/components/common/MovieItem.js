// Component hiển thị thông tin cơ bản về phim trong danh sách kết quả.

import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie, isOnlyImage = false }) => {

    const truncatedTitle = movie.title.length > 15 ? `${movie.title.substring(0, 15)}...` : movie.title;

    return (
        <Link to={`/movie/${movie.id}`} >

            <img alt={movie.title}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                className='sm:min-h-[100px] lg:min-h-[300px]'
            />

            {isOnlyImage && (
                <div className="hidden sm:block text-white">
                    <h6 className="lg:text-xl"> {truncatedTitle} </h6>
                    <p className="lg:text-sm"> Release Date: {movie.release_date} </p>
                    <p className="lg:text-sm"> Rating: {movie.vote_average} </p>
                </div>
            )}
        </Link>

    );
};

export default MovieItem;
