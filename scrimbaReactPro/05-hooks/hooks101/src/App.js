import React, { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0);

  function handleIncreaseCounter() {
    setCounter(++counter);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncreaseCounter}>Increase Counter</button>
    </div>
  );
}

export default App;
