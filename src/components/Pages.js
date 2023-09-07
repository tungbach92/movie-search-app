import React from 'react'
import MovieSearch from './Header/MovieSearch'
import MovieHot from '../components/MovieHot/MovieHot'
import Home from './Home/Home';
import Footer from './Footer/Footer';
import usePopularMovies from '../hooks/usePopularMovies';
import { useAtom } from 'jotai';
import { searchAtom } from '../store/search.atom';
import SearchPage from './Search';
// import MoviesList from '../components/MoviesList'


function Pages() {

    const { popularMovies } = usePopularMovies();
    const [search] = useAtom(searchAtom);

    return (
        <div >
            <MovieSearch />

            {
                search ?
                    <SearchPage movies={popularMovies} />
                    :
                    <>
                        <MovieHot movies={popularMovies} />
                        <Home popularMovies={popularMovies} />
                    </>
            }

            <Footer />

            {/* <MoviesList popularMovies={popularMovies}/> */}
        </div>
    )
}

export default Pages