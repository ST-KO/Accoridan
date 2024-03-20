import React from 'react';
import './App.css';
import Accordian from './accordian/index.jsx';
import RandomColor from './random-color/index.jsx';
import StarRating from './star-rating/index.jsx';
import ImageSlider from './image-slider/index.jsx';
import LoadMoreData from './load-more-data/index.jsx';

function App() {
  
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <StarRating 
        numOfStars={10} 
      />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/>
      <LoadMoreData />
    </div>
  );
}

export default App;
