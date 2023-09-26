import React, { useEffect } from 'react'
import MoviesList from '../common/MoviesList';
import { useAtom } from 'jotai';
import { searchAtom } from '../../store/search.atom';
import usePopularMovies from '../../hooks/usePopularMovies';

export default function ResultsSearch() {

    const [search] = useAtom(searchAtom);
    const { popularMovies } = usePopularMovies();

    // Hàm này có thể thực hiện việc lọc danh sách phim phổ biến dựa trên giá trị search
    const filterPopularMovies = () => {
        if (!search) {
            return popularMovies;
        }

        return popularMovies.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        )
    };

    return (
        <div className='bg-black'>
            <h2 className='py-8 font-medium text-3xl text-center text-white'> Kết quả tìm kiếm cho: {search} </h2>

            <div className='p-16'>
                <MoviesList commonCateGoryMovies={filterPopularMovies()} />
            </div>
        </div>
    )
}
