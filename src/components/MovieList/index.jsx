import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Movie from '../Movie';

const MovieList=({movie})=>{
    return(
        <div className="movieListContainer"> 
            <Movie title={movie.title} poster={movie.poster} year={movie.year} rating={movie.rating} director={movie.director} genre={movie.genre} name={movie.cast.name} as={movie.cast.as}/>
        </div>
    )
}

export default MovieList;