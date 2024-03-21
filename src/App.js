import React from 'react';
import './App.css';
import Accordian from './accordian/index.jsx';
import RandomColor from './random-color/index.jsx';
import StarRating from './star-rating/index.jsx';
import ImageSlider from './image-slider/index.jsx';
import LoadMoreData from './load-more-data/index.jsx';
import Menus from './tree-view/data.js';
import Recursive from './tree-view/recursive.jsx';

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
      <div>
        <h1>Recursive</h1>
        <Recursive data={Menus}/>
      </div>
      
    </div>
  );
}

export default App;
