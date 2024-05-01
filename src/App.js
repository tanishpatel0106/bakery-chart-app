import React, { useState } from 'react';
import BakeryChart from './BakeryChart';
import './App.css';
import croissantIcon from './icons/croissant.svg';
import pancakesIcon from './icons/pancakes.svg';
import cookiesIcon from './icons/cookies.svg';
import doughnutsIcon from './icons/doughnuts.svg';

const chartData = {
  Croissants: [12, 19, 3, 5],
  Pancakes: [2, 3, 20, 30],
  Cookies: [3, 10, 13, 15],
  Doughnuts: [25, 25, 10, 5]
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Doughnuts');
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="app-container">
      <div className="button-group">
        <button onClick={() => handleButtonClick('Croissants')}
                className={selectedCategory === 'Croissants' ? 'active' : ''}>
          <img src={croissantIcon} alt="Croissants" />
          Croissants
        </button>
        <button onClick={() => handleButtonClick('Pancakes')}
                className={selectedCategory === 'Pancakes' ? 'active' : ''}>
          <img src={pancakesIcon} alt="Pancakes" />
          Pancakes
        </button>
        <button onClick={() => handleButtonClick('Cookies')}
                className={selectedCategory === 'Cookies' ? 'active' : ''}>
          <img src={cookiesIcon} alt="Cookies" />
          Cookies
        </button>
        <button onClick={() => handleButtonClick('Doughnuts')}
                className={selectedCategory === 'Doughnuts' ? 'active' : ''}>
          <img src={doughnutsIcon} alt="Doughnuts" />
          Doughnuts
        </button>
      </div>
      <BakeryChart dataKey={selectedCategory} data={chartData[selectedCategory]} />
    </div>
  );
}

export default App;
