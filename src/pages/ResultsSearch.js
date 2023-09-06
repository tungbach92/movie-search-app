import React, {useState, useEffect} from 'react'
import MoviesList from '../components/common/MoviesList';

function ResultsSeach() {

    const [search, setSearch] = useAtom(searchAtom)
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        // Gọi API và cập nhật danh sách phim bằng setMovies
    }, [search]);

    const handleSearch = () => {
        // Gọi API khi người dùng nhấn nút tìm kiếm
    };

    return (
        <div>
            {searchResults.map((movie) => (
                <MoviesList key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default ResultsSearch