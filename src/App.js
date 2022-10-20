import './App.css';
import MovieList from './Components/MovieList';
import React, {useState, useRef, useEffect} from 'react';
import Header from './Components/Header';

function App() {

    const refTitle=useRef();
    const refDescription=useRef();
    const refPosterUrl=useRef();
    const refRating=useRef();

    const [ titleInput, setTitleInput ] = useState("A");
    const [ descriptionInput, setDescriptionInput ] = useState("B");
    const [ posterUrlInput, setPosterUrlInput ] = useState("C");
    const [ ratingInput, setRatingInput ] = useState("D");
    let movie={};
    const data = [];


    /*useEffect(()=>{
            setTitleInput("");
            setDescriptionInput("");
            setPosterUrlInput("");
            setRatingInput("");
    });*/

    const addButton= ()=>{

            setTitleInput(refTitle.current.value);
            setDescriptionInput(refDescription.current.value);
            setPosterUrlInput(refPosterUrl.current.value);
            setRatingInput(refRating.current.value);

            console.log(titleInput, descriptionInput, posterUrlInput, ratingInput);
            movie.title=titleInput;
            movie.description=descriptionInput;
            movie.posterUrl=posterUrlInput;
            movie.rating=ratingInput;
            data.push(movie);
            console.log(movie);
            //console.log(data);
     }
      
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
