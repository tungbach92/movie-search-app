import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';

function MoviesList({ commonCateGoryMovies }) {
    // console.log({ commonCateGoryMovies });

    const [sortOption, setSortOption] = useState('release_date');

    useEffect(() => {
        const sortMovies = () => {
            if (sortOption === 'release_date') {
                commonCateGoryMovies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
            } else if (sortOption === 'vote_average_Asc') {
                commonCateGoryMovies.sort((a, b) => b.vote_average - a.vote_average);
            } else if (sortOption === 'vote_average_Desc') {
                commonCateGoryMovies.sort((a, b) => a.vote_average - b.vote_average);
            }
        }

        sortMovies();
    }, [sortOption, commonCateGoryMovies])

    return (
        <>
            <select className='border border-solid border-black rounded-md py-3 mb-7'
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
            >
                <option value="release_date"> Phim mới nhất </option>
                <option value="vote_average_Asc"> Đánh giá : Thấp - Cao </option>
                <option value="vote_average_Desc"> Đánh giá : Cao - Thấp </option>
            </select>

            <div className='grid grid-cols-4 gap-8'>
                {commonCateGoryMovies && commonCateGoryMovies.length && commonCateGoryMovies.map(movie => (
                    <MovieItem key={movie.id} movie={movie} isOnlyImage={true} />
                ))}
            </div>
        </>
    );
}

export default MoviesList


/*
- adult:            Phù hợp cho người lớn hay không (false/true)
- backdrop_path:    Đường dẫn đến hình nền (backdrop) của phim.
- genre_ids:        Mảng chứa các mã thể loại phim (genre IDs).
- id:               Mã số duy nhất định danh 
- original_language:Ngôn ngữ gốc
- original_title:   Tiêu đề gốc 
- overview:         Tóm tắt nội dung (overview) 
- popularity:       Độ phổ biến của phim dựa trên dữ liệu thống kê.
- poster_path:      Đường dẫn đến hình poster 
- release_date:     Ngày phát hành 
- title:            Tiêu đề 
- video:            Mô tả liệu phim có phải là video hay không 
- vote_average:     Điểm đánh giá trung bình 
- vote_count:       Số lượt đánh giá 
*/