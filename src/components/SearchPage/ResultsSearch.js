import React, { useEffect } from 'react'
import MoviesList from '../common/MoviesList';
import { useAtom } from 'jotai';
import { searchAtom } from '../../store/search.atom';
import usePopularMovies from '../../hooks/usePopularMovies';
import MovieItem from '../common/MovieItem';

export default function ResultsSearch() {

    const [search] = useAtom(searchAtom);
    const { popularMovies } = usePopularMovies();

    // Hàm này có thể thực hiện việc lọc danh sách phim phổ biến dựa trên giá trị search
    const filterPopularMovies = () => {
        if (!search) {
            return popularMovies;
        }

        return popularMovies.filter((movie) =>
            movie.title.includes(search)
        );
    };

    return (
        <>
            <h2 className='my-6 font-medium text-3xl text-center'> Kết quả tìm kiếm cho: {search} </h2>

            <div className='flex flex-1 justify-center my-12'>
                <MoviesList commonCateGoryMovies={filterPopularMovies()} />
            </div>
        </>
    )
}
