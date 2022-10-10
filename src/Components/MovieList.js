import React from 'react';
import MovieCard from './MovieCard';
import uuid from 'react-uuid';

const MovieList = ({movieList}) => {


    return (
        <div>
            {movieList.map(movieCard =>{
                return (
                    <MovieCard movieCard={movieCard} key={uuid()} />
                )
            })}

        </div>
    );
}

export default MovieList;
