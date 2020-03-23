import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState('2');
  const [isTimeRunning, setIsTimeRunning] = useState(false);

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
    setIsTimeRunning(true);
    setTimeRemaining(2);
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(decrementTimeRemaining, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={handleClick}>Start</button>
      <h1 className='word-count'>Word Count: ?</h1>
    </div>
  );
}

export default App;
