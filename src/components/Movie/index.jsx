import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Actor from '../Actor'


const Movie = (props)=>{
    return (
        <div className = "grid-container">
        <div className=" posterItem">
        <img src={props.poster} alt="poster" className="img" />
        </div>
        <div className="grid-item descriptionItem">
        <h3>{props.title}</h3>
        <p><b>Rok vydání</b>: {props.year}</p>
        <p><b>Žánr</b>: {props.genre}</p>
        <p><b>Režie</b>: {props.director}</p>
        <p><b>Rating</b>:{props.rating}/10</p>
        </div>
        <div className="grid-item castItem">
            <h4>V hlavních rolích:</h4>
            {props.actors.map(a=><Actor name={a.name} as={a.as}/>)}
            </div>
        
        </div>
    )
}

export default Movie;