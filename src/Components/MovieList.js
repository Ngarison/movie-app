import React, {useRef } from 'react';
import MovieCard from './MovieCard';
import uuid from 'react-uuid';

const MovieList = () => {

    const refTitle=useRef();
    const refDescription=useRef();
    const refPosterUrl=useRef();
    const refRating=useRef();

    let titleValue;
    let descriptionValue;
    let posterUrlValue;
    let ratingValue;
    let film;

    const addButton= ()=>{
            titleValue= refTitle.current.value;
            descriptionValue=refDescription.current.value;
            posterUrlValue=refPosterUrl.current.value;
            ratingValue=refRating.current.value;
            console.log(titleValue, descriptionValue, posterUrlValue, ratingValue);

            film={title:titleValue, description:descriptionValue,  posterUrl:posterUrlValue, rating:ratingValue};
            console.log(film);
     }

    return (
        <div>
            <h4>Add of a New Movie</h4>
            <input placeholder='Title'  ref={refTitle}/>
            <input placeholder='Description' ref={refDescription}/>
            <input placeholder='PosterUrl' ref={refPosterUrl}/>
            <input placeholder='Rating' ref={refRating}/>
            <button onClick={addButton}>ADD MOVIE</button>

            <MovieCard movie={film}/>
        </div>
    );
}

export default MovieList;
