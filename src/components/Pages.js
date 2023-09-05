import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieSearch from './Header/MovieSearch'
import MovieHot from '../components/MovieHot/MovieHot'
import NavBar from './Home/Home';
import Footer from './Footer/Footer';
import usePopularMovies from '../hooks/usePopularMovies';
// import MovieDetail from './MovieDetail';
import MoviesList from '../components/MoviesList'



function Pages() {

    

    const {popularMovies} = usePopularMovies()

    return (
        <div>
            <MovieSearch />

            <MovieHot movies={popularMovies} />

            <NavBar popularMovies={popularMovies}/>

            <Footer />

            {/* <MovieDetail movie={popularMovies[1]}/> */}

            <MoviesList popularMovies={popularMovies}/>
        </div>
    )
}

export default Pages