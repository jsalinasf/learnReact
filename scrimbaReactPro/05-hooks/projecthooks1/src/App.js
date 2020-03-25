import React, { useState, useEffect } from 'react';

function App() {
  const STARTING_TIME = 3;
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(' ');
    return wordsArr.filter(word => word !== '').length;
  }

  function decrementTimeRemaining() {
    setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
  }

  function startGame() {
    updateTextButton();
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setWordCount(0);
    setText('');
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
    updateTextButton();
  }

  function updateTextButton() {
    if (isTimeRunning) {
      document.querySelector('button').innerHTML = 'Type Fast!';
    } else {
      document.querySelector('button').innerHTML = 'Play Again';
    }
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(decrementTimeRemaining, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
