import React from 'react';
import { render } from 'react-dom';
import './style.css';

const Actor=({name,as})=>{
    return(
        <>
          <p> <b>{name}</b> </p>
            <p className="asName">as {as}</p>
        </>
    )
}

export default Actor;