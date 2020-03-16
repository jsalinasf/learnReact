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

  function handleDoubleCounter() {
    setCounter(prevCounter => prevCounter * 2);
  }

  function handleHalfCounter() {
    setCounter(prevCounter => Math.ceil(prevCounter / 2));
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleDoubleCounter}>Double</button>
      <br />
      <button onClick={handleIncreaseCounter}>Increase</button>
      <br />
      <button onClick={handleResetCounter}>Reset</button>
      <br />
      <button onClick={handleDecreaseCounter}>Decrease</button>
      <br />
      <button onClick={handleHalfCounter}>Half</button>
    </div>
  );
}

export default App;
