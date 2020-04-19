import React from 'react';
import useWordGame from './hooks/useWordGame';

function App() {
  const {
    text,
    timeRemaining,
    isTimeRunning,
    wordCount,
    textBoxRef,
    handleChange,
    startGame,
  } = useWordGame(5);
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
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
