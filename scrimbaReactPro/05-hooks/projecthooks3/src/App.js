import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

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

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time remaining:</h4>
      <button onClick={() => console.log(calculateWordCount(text))}>
        Start
      </button>
      <h1>Word count is:</h1>
    </div>
  );
}

export default App;
