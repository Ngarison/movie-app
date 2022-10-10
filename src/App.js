import './App.css';
import MovieList from './Components/MovieList';
import React, {useState, useRef} from 'react';
import Header from './Components/Header';

function App(props) {

  const refTitle=useRef();
    const refDescription=useRef();
    const refPosterUrl=useRef();
    const refRating=useRef();

    /*let titleValue;
    let descriptionValue;
    let posterUrlValue;
    let ratingValue;*/
    let movie;

    const addButton= ()=>{
            props.titleValue= refTitle.current.value;
            props.descriptionValue=refDescription.current.value;
            props.posterUrlValue=refPosterUrl.current.value;
            props.ratingValue=refRating.current.value;
            console.log(props.titleValue, props.descriptionValue, props.posterUrlValue, props.ratingValue);

            movie={title:props.titleValue, description:props.descriptionValue,  posterUrl:props.posterUrlValue, rating:props.ratingValue};
            console.log(movie);
     }
     movie={title:"titleValue", description:"descriptionValue",  posterUrl:"posterUrlValue", rating:"ratingValue"};
     const data = [];
     data.push(movie);

  const [ movieList, setMovieList ] = useState(data);
  return (
    <div className="App">
      <Header/>
      <MovieList movieList={movieList}/>
      <div>
            <h4>Add of a New Movie</h4>
            <input placeholder='Title'  ref={refTitle}/>
            <input placeholder='Description' ref={refDescription}/>
            <input placeholder='PosterUrl' ref={refPosterUrl}/>
            <input placeholder='Rating' ref={refRating}/>
            <button onClick={addButton}>ADD MOVIE</button>
        </div>
    </div>
  );
}

export default App;
