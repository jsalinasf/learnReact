import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(prevCounter => ++prevCounter);
  }

  function decrement() {
    setCounter(prevCounter => --prevCounter);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
