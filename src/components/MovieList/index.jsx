import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Movie from '../Movie';

const MovieList=(props)=>{
    return(
        <div className="movieListContainer"> 
         {props.films.map(film=> <Movie key={film.id} title={film.title} poster={film.poster} year={film.year} rating={film.rating} director={film.director} genre={film.genre} actors={film.cast} />)}
        </div>
    )
}

export default MovieList;