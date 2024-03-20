import React from 'react';
import './App.css';
import Accordian from './accordian/index.jsx';
import RandomColor from './random-color/index.jsx';
import StarRating from './star-rating/index.jsx';

function App() {
  
//   const [state, setState] = React.useState(false);

//   const handleMouseLeave = () => {
//     setState(false);
//   }

//   const handleMouseHover = (index) => {
//     setState(true);
//     console.log(state)
// };

  return (
    <div className="App">
      {/* <Accordian />
      <RandomColor /> */}
      <StarRating 
        numOfStars={10} 
      />
    </div>
  );
}

export default App;
