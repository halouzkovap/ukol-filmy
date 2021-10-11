import React from 'react';
import { render } from 'react-dom';
import './style.css';

const Actor=({name,as})=>{
    return(
        <>
            <p>{name}</p>
            <p>{as}</p>
        </>
    )
}

export default Actor;