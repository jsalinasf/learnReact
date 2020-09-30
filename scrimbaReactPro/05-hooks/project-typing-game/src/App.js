import React, { useState, useEffect } from 'react';

// Set the minimum length for words to be counted
const minWordLength = 2;
// set Initial Timer in seconds for the game
const initialTimer = 5;

const App = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState('0');
  const [timeRemaining, setTimeRemaining] = useState(initialTimer);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  function handleChange(event) {
    setText(event.target.value);
  }

  function countWords(receivedText) {
    let filteredWords = receivedText.trim().split(' ');
    return filteredWords.filter((word) => word.length >= minWordLength).length;
  }

  function handleClick() {
    startGame();
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(initialTimer);
    setCount(0);
    setText('');
  }

  function endGame() {
    setCount(countWords(text));
    setIsTimeRunning(false);
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isTimeRunning && timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={handleClick}>Start</button>
      <h1>word count: {count}</h1>
    </div>
  );
};

export default App;
