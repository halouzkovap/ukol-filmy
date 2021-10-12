import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Actor from '../Actor'


const Movie = (props)=>{
    return (
        <div className = "grid-container">
        <div className=" poster">
        <img src={props.poster} alt="poster" className="img" />
        </div>
        <div className="description">
        <h3>{props.title}</h3>
        <p><b>Rok vydání</b>: {props.year}</p>
        <p><b>Žánr</b>: {props.genre}</p>
        <p><b>Režie</b>: {props.director}</p>
        <p><b>Rating</b>:{props.rating}/10</p>
        <br/>
        <h5>V hlavních rolích:</h5>
         {props.actors.map(a=><Actor name={a.name} as={a.as}/>)}
        </div>
        </div>
    )
}

export default Movie;