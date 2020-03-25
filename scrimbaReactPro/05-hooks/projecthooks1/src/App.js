import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState('5');
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

  function handleClick() {
    controlUIElements(true);
    setIsTimeRunning(true);
    setTimeRemaining(5);
    setWordCount(0);
  }

  function controlUIElements(areDisabled) {
    if (areDisabled) {
      document.querySelector('button').disabled = true;
      document.querySelector('textarea').disabled = false;
      document.querySelector('button').innerHTML = 'Type Fast!';
      setText('');
    } else {
      document.querySelector('button').innerHTML = 'Play Again';
      document.querySelector('button').disabled = false;
      document.querySelector('textarea').disabled = true;
    }
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(decrementTimeRemaining, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
      setWordCount(calculateWordCount(text));
      controlUIElements(false);
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} disabled={true} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={handleClick}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
