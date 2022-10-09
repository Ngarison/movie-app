import React, {useState} from 'react';
import MovieList from './MovieList';

const Filter = () => {
    const [Title, setTitle] = useState(initialState);
    const [Rate, setRate] = useState(initialState);
    const refValue=useRef();
    const submitButton= ()=>{
       // if()
        refValue.current.value="";

    }
    return (
        <div>
            <h3>Filter Lis</h3>
            <input placeholder='Enter Title or Rate' ref={refValue}/>
        </div>
    );
}

export default Filter;
