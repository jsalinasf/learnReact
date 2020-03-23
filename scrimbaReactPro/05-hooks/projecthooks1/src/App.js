import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState('5');

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

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(decrementTimeRemaining, 1000);
    }
  }, [timeRemaining]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => console.log(calculateWordCount(text))}>
        Start
      </button>
      <h1>Word Count: ?</h1>
    </div>
  );
}

export default App;
