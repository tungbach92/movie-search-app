// Component hiển thị thông tin cơ bản về phim trong danh sách kết quả.

import React from 'react';

const MovieItem = ({ movie, isOnlyImage = false }) => {
    console.log(movie);

    return (
        <div >
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />

            {isOnlyImage && (
                <div className="flex flex-col">
                    <h6 className="text-xl">{movie.title}</h6>
                    <p className="text-sm">Release Date: {movie.release_date}</p>
                    <p className="text-sm">Overview: {movie.overview}</p>
                    <p className="text-sm">Rating: {movie.vote_average}</p>
                </div>
            )}
        </div>

    );
};

export default MovieItem;
