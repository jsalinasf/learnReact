import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(5);

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

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => setTimeRemaining((prevTime) => prevTime - 1), 1000);
    }
  }, [timeRemaining]);

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button>Start</button>
      <h1>Word count is:</h1>
    </div>
  );
}

export default App;
