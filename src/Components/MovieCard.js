import React, {useState} from 'react';
import uuid from 'react-uuid';

const MovieCard = ({movieCard}) => {

    return (
        <>
        <h3>MovieCard</h3>
          <div key={uuid()}>
            <div>{movieCard.title}</div>
            <div>{movieCard.description}</div>
            <div>{movieCard.posterUrl}</div>
            <div>{movieCard.rating}</div>
          </div> 
        </>
    );
    
}

export default MovieCard;
