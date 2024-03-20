import React,{ useState } from 'react';
import data from './data.js';
import './styles.css';

const Accordian = () =>{
    
    const [selectedId, setSelectedId] = useState("");

    const [multiple, setMultiple] = useState(false);

    const [multipleId, setMultipleId] = useState([]);


    console.log(multiple)
    console.log(multipleId)
    
    
    const handleSingleSelection = (id) => {
        setSelectedId(prevId => prevId === id ? null : id);

    };


    const handleMultipleSelection = (id) => {
        let newArray = [...multipleId];
        const findExistingId = newArray.indexOf(id);
        findExistingId < 0 ? newArray.push(id) : newArray.splice(findExistingId, 1);
        setMultipleId(newArray);
    };

    const setMultipleTrue = () => {
        setMultiple(prevState => !prevState);
    };

    const handleOnClick = (data) => {
        return (
            multiple ? handleMultipleSelection(data.id) : 
                       handleSingleSelection(data.id)
        );
    }

    const answer = (data) => {
        return (
            !multiple && selectedId === data.id ? 
            <div className='content'>{data.answer}</div> :
                 multipleId.map(multipleId => data.id === multipleId &&
                 <div className='content'>{data.answer}</div>)
        );
    };

    return (
       <>
            
            <div className='wrapper'>
            <h1>Accordian</h1>
                <button className='multiple-button' onClick={setMultipleTrue}>Enable Multiple Selections</button>
                <div className='accordian'>
                    {
                        data?.length > 0 ? 
                        data.map(data => 
                            <div key={data.id} onClick={() => handleOnClick(data)} 
                                className='item'>
                                <div className='title'>
                                    <h3>{data.question}</h3>
                                    <span>+</span>
                                </div>
                                {answer(data)}
                            </div>
                        )
                        : <div>No Data Found</div>
                    }
                </div>
            </div>
       </>
    );
};

export default Accordian;