import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(2);
  const [isMultiple, setIsMultiple] = useState(false);

  useEffect(() => {
    const TEN_SECONDS = 10000;
    const RANGE_NUMBER = 100;
    const intervalId = setInterval(() => {
      const newRandomNumber = Math.round(Math.random() * RANGE_NUMBER);
      setRandomNumber(newRandomNumber);
    }, TEN_SECONDS);

    return () => { clearInterval(intervalId) }

  }, []);

  useEffect(() => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setIsMultiple(true);
    }
  }, [randomNumber]);

  useEffect(() => {
    if (isMultiple) {
      const FOUR_SECONDS = 4000;
      const intervalId = setInterval(() => {
        setIsMultiple(false);
      }, FOUR_SECONDS);
      return () => { clearInterval(intervalId); }
    }
  }, [isMultiple])

  return (
    <div className="App">
     <h1>{ randomNumber }</h1>
     <h2>{ isMultiple && 'Acerto' }</h2>
    </div>
  );
}

export default App;
