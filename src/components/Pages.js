import React from 'react'
import MovieSearch from './Header/MovieSearch'
import MovieHot from '../components/MovieHot/MovieHot'
import Home from './Home/Home';
import Footer from './Footer/Footer';
import usePopularMovies from '../hooks/usePopularMovies';

function Pages() {

    const { popularMovies } = usePopularMovies();

    return (
        <div >
            <MovieSearch />
            <MovieHot movies={popularMovies} />
            <Home popularMovies={popularMovies} />
            <Footer />

            {/* <MoviesList popularMovies={popularMovies}/> */}
        </div>
    )
}

export default Pages


/* 
{
    search ?
        <SearchPage movies={popularMovies} />
        :
        <>
            <MovieHot movies={popularMovies} />
             <Home popularMovies={popularMovies} />
        </>
} 
*/

