import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function handleClick() {
    const totalWords = document.querySelector('textarea').innerHTML;
    const countWords = totalWords.split(' ').length;
    document.querySelector('.word-count').innerHTML = countWords;
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: ?</h4>
      <button onClick={handleClick}>Start</button>
      <h1 className='word-count'>Word Count: ?</h1>
    </div>
  );
}

export default App;
