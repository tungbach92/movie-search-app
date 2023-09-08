import React from 'react';
import MovieItem from '../common/MovieItem';

function MovieCustom({ movies }) {

    return (
        <div >
            <h1 className='text-center mt-6 font-medium'> Danh sách tìm kiếm </h1>

            <div className='flex gap-5 justify-center mt-8 bg-slate-50 min-h-[70vh]'>
                {movies?.map(movie => (
                    <MovieItem key={movie.id} movie={movie} isOnlyImage={true} />
                ))}
            </div>
        </div>
    );
}

export default MovieCustom
