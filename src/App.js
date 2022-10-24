import './App.css';
import MovieList from './Components/MovieList';
import React, {useState, useRef} from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const refTitle=useRef();
    const refDescription=useRef();
    const refPosterUrl=useRef();
    const refRating=useRef();

    const [ id, setId ] = useState(0);
    const [ titleInput, setTitleInput ] = useState('');
    const [ descriptionInput, setDescriptionInput ] = useState('');
    const [ posterUrlInput, setPosterUrlInput ] = useState('');
    const [ ratingInput, setRatingInput ] = useState('');
    let movie={};
    //const data = [];
    const [ movieList, setMovieList ] = useState([]);  

    const addButton= ()=>{
            setId(id+1);
            setTitleInput(refTitle.current.value);
            setDescriptionInput(refDescription.current.value);
            setPosterUrlInput(refPosterUrl.current.value);
            setRatingInput(refRating.current.value);

           // console.log(titleInput, descriptionInput, posterUrlInput, ratingInput);
           movie.id=id;
           movie.title=titleInput;
           movie.description=descriptionInput;
           movie.posterUrl=posterUrlInput;
           movie.rating=ratingInput;
           console.log(movie);
          //data.push(movie);
          //console.log(data);
          setMovieList([...movieList, movie]);
     }
      
  
  return (
    <div className="App container">
      <Header/>
      <div className='container text-center'>
            <h4>Add of a New Movie</h4>
            <div className='row'>
              <div className='col'><input placeholder='Title'  ref={refTitle}/></div>
            </div>
            <div className='row'>
              <div className='col'><input placeholder='Description' ref={refDescription}/></div>
            </div>
            <div className='row'>
              <div className='col'><input placeholder='PosterUrl' ref={refPosterUrl}/></div>
            </div>
            <div className='row'>
              <div className='col'><input placeholder='Rating' ref={refRating}/></div>
            </div>
            <div><button className='btn btn-dark' onClick={addButton}>ADD MOVIE</button></div>
        </div>
      <MovieList movieList={movieList}/> 
    </div>
  );
}

export default App;
