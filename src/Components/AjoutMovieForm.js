import React, {useRef} from 'react';

const AjoutMovie = () => {
    const refTitle=useRef();
    const refDescription=useRef();
    const refPosterUrl=useRef();
    const refRating=useRef();

   /* let titleValue;
    let descriptionValue;
    let posterUrlValue;
    let ratingValue;
    let film;*/

    const addButton= ()=>{
            this.titleValue= refTitle.current.value;
            this.descriptionValue=refDescription.current.value;
            this.posterUrlValue=refPosterUrl.current.value;
            this.ratingValue=refRating.current.value;
            console.log(titleValue, descriptionValue, posterUrlValue, ratingValue);

            film={title:this.titleValue, description:this.descriptionValue,  posterUrl:this.posterUrlValue, rating:this.ratingValue};
            console.log(film);
     }

     const [ titleInput, setTitleInput ] = useState('');
     const [ descriptionInput, setDescriptionInput ] = useState('');
     const [ posterUrlInput, setPosterUrlInput ] = useState('');
     const [ ratingInput, setRatingInput ] = useState('');

     const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    return (
        <div>
            <h4>Add of a New Movie</h4>
            <input value={titleInput} onChange={handleChange} placeholder='Title'  ref={refTitle}/>
            <input value={descriptionInput} onChange={handleChange} placeholder='Description' ref={refDescription}/>
            <input value={posterUrlInput} onChange={handleChange} placeholder='PosterUrl' ref={refPosterUrl}/>
            <input value={ratingInput} onChange={handleChange} placeholder='Rating' ref={refRating}/>
            <button onClick={addButton}>ADD MOVIE</button>
        </div>
    );
}

export default AjoutMovie;
