import React from 'react';
import { render } from 'react-dom';
import './style.css';

const Actor=(props)=>{
    return(
        <>
            <p>{props.name} as {props.as}</p>
        </>
    )
}

export default Actor;