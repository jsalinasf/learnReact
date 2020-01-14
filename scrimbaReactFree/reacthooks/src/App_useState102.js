// useEffect is a replacement for the following lifecycle methods:
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// You can think of useEffect a
// Side effects of my component such as:
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("");

  function increment() {
    setCounter(prevCounter => ++prevCounter);
  }

  function decrement() {
    setCounter(prevCounter => --prevCounter);
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [counter]);

  // This useEffect will run only when "counter" changes
  // if this array is left blank, this useEffect will run once when the component mounts. Sames as componentDidMount

  return (
    <div>
      <h1 style={{ color: color }}>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
