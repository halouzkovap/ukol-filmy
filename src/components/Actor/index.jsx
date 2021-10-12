import React from 'react';
import { render } from 'react-dom';
import './style.css';

const Actor=(props)=>{
    return(
        <>
          <p> <b>{props.name}</b> </p>
            <p className="asName">as {props.as}</p>
        </>
    )
}

export default Actor;