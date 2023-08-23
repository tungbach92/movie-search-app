import React from 'react';
import MovieItem from './MovieItem';

function MoviesList({popularMovies}) {
    return (
        <div>
            {popularMovies && popularMovies.length && popularMovies.map(movie => (
                <MovieItem key={movie.id} movie={movie} isOnlyImage={true}/>
            ))}
        </div>
    );
}

export default MoviesList


/*
- adult: phù hợp cho người lớn hay không (false/true)
- backdrop_path: Đường dẫn đến hình nền (backdrop) của phim.
- genre_ids: Mảng chứa các mã thể loại phim (genre IDs).
- id: Mã số duy nhất định danh 
- original_language: Ngôn ngữ gốc
- original_title: Tiêu đề gốc 
- overview: Tóm tắt nội dung (overview) 
- popularity: Độ phổ biến của phim dựa trên dữ liệu thống kê.
- poster_path: Đường dẫn đến hình poster 
- release_date: Ngày phát hành 
- title: Tiêu đề 
- video: Mô tả liệu phim có phải là video hay không 
- vote_average: Điểm đánh giá trung bình 
- vote_count: Số lượt đánh giá 
*/