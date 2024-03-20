import React from 'react';
import {FaStar} from 'react-icons/fa';
import './styles.css';

const StarRating = (props) => {
    
    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
    };

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    };

    const handleMouseLeave = () => {
        setHover(rating);
    };

    const Star = 
        
        [...Array(props.numOfStars)].map((_,index) => {
            index += 1;  
            return <FaStar 
                
                key={index} 
                className={index <= (hover || rating) ? 'active' : 'not-active'}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                onClick={() => handleClick(index)}
                />
            }
                
        )
    

    return (
        <>
            <h1 className="star-rating-heading">Star Rating</h1>
            <div className="star-rating">
                {Star}
            </div>
        </>
    );
};

export default StarRating;