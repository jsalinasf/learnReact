import React, { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0);

  function handleIncreaseCounter() {
    setCounter(prevCounter => prevCounter + 1);
  }

  function handleResetCounter() {
    setCounter(0);
  }

  function handleDecreaseCounter() {
    setCounter(prevCounter => prevCounter - 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncreaseCounter}>Increase</button>
      <br />
      <button onClick={handleResetCounter}>Reset</button>
      <br />
      <button onClick={handleDecreaseCounter}>Decrease</button>
    </div>
  );
}

export default App;
