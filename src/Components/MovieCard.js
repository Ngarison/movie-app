import React, {useState} from 'react';
import uuid from 'react-uuid';

const MovieCard = ({movie}) => {

    ///id=uuid(); 
     const initialValues =[];
     initialValues.push(movie);

    const [Movie, setMovie]=useState(initialValues);
    return (
        <>
        {Movie.map((movie)=>{
            return<ul key={uuid()}><h4>MOVIECARD</h4>
            <li>{movie.title}</li>
            <li>{movie.description}</li>
            <li>{movie.posterUrl}</li>
            <li>{movie.rating}</li>
            </ul> 
        })}
        
        </>
    );
    
}

export default MovieCard;
