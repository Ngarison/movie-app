import React, {useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movieList}) => {


    return (
        <div>
            {movieList.map(movieCard =>{
                return (
                    <MovieCard movieCard={movieCard} />
                )
            })}

        </div>
    );
}

export default MovieList;
