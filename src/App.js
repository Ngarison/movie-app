import './App.css';
import MovieList from './Components/MovieList';
import React, {useState} from 'react';
import Header from './Components/Header';

function App() {
  const [ movieList, setMovieList ] = useState([{title:"t1", description:"des1", posterUrl:"post1", rating:"rat1"}]);
  return (
    <div className="App">
      <Header/>
      <MovieList movieList={movieList}/>
    </div>
  );
}

export default App;
