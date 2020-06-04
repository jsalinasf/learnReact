import React, { useState, useEffect } from 'react';

function App() {
  const STARTING_TIME = 5;

  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordArr = text
      .trim()
      .split(' ')
      .filter((element) => element !== '');
    return wordArr.length;
  }

  function startGame() {
    setTimeRemaining(STARTING_TIME);
    setText('');
    setIsTimeRunning(true);
    setWordCount(0);
  }

  function stopGame() {
    setWordCount(calculateWordCount(text));
    setIsTimeRunning(false);
  }

  function handleClick() {
    startGame();
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => setTimeRemaining((prevTime) => prevTime - 1), 1000);
      console.log(isTimeRunning);
    } else if (timeRemaining === 0) {
      stopGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={handleClick} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
