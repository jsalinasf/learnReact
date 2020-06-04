import React, { useState, useEffect } from 'react';

function App() {
  const START_GAME = 2;

  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(START_GAME);
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
    setTimeRemaining(START_GAME);
    setText('');
    setIsTimeRunning(true);
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
      <textarea value={text} onChange={handleChange} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={handleClick}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
