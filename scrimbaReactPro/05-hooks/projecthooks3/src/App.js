import React from 'react';
import Tips from './components/Tips';
import useWordGame from './hooks/useWordGame';

function App() {
  const {
    refTextArea,
    handleChange,
    text,
    isTimeRunning,
    remainingTime,
    handleClick,
    wordCount,
  } = useWordGame();

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea
        ref={refTextArea}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      ></textarea>
      <h4>Time Remaining: {remainingTime}</h4>
      <button onClick={handleClick} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
      <Tips disabled={isTimeRunning} />
    </div>
  );
}

export default App;
