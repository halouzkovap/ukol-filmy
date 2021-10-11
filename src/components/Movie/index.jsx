import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Actor from '../Actor';


const Movie = ({title,poster,year,rating,director,genre,name,as})=>{
    return (
        <div className = "movieContainer">
        <div className="poster">
        <img src={poster} alt="poster" className="img" />
        </div>
        <div className="description">
        <h3>{title}</h3>
        <p>Rok vydání: {year}</p>
        <p>Žánr: {genre}</p>
        <p>Režie: {director}</p>
        <p>Rating {rating}/10</p>
        <p>V hlavních rolích</p>
        <Actor name={name} as={as}/>
        </div>
        </div>
    )
}

export default Movie;