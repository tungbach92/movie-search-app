//  Component hiển thị chi tiết về một bộ phim khi được chọn.

import React from 'react'

const MovieDetail = ({ movie }) => {
    return (
        <div>
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
            
            <div className="flex flex-col">
                <h6 className="text-xl"> {movie.title} </h6>
                <p className="text-sm"> Release Date: {movie.release_date} </p>
                <p className="text-sm"> Overview: {movie.overview} </p>
                <p className="text-sm"> Rating: {movie.vote_average} </p>
                <p className="text-sm"> Review: {movie.vote_count} </p>
            </div>
        </div>
    );
}

export default MovieDetail

