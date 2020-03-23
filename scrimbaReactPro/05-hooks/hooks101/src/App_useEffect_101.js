// componentDidMount
// componentDidUpdate
// component WillUnmount

// useEffect a Hook that allows to produce "side effects" on my components

// Side Effects? -> anything that reaches out of the component and does somethings such as:
// Network request
// Manual DOM Manipulation
// Event Listeners or timeouts and intervals

import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

function App() {
  const [count, setCount] = useState(0);
  let [color, setColor] = useState('');

  function handleDecrement() {
    setCount(prevCount => prevCount - 1);
  }

  function handleIncrement() {
    setCount(prevCount => prevCount + 1);
  }

  // component willUpdate
  // this useEffect will run every time "Count" changes
  // pay attention to the second parameter that useEffect is receiving [count]
  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  // this useEffect will run only ONCE, when the component mounts
  // pay attention to the second parameter that useEffect is receiving []
  // useEffect(() => {
  //   setColor(randomcolor());
  // }, []);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
