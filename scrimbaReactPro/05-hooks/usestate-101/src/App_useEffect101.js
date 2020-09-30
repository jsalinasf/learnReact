// componentDidMount
// componentDidUpdate
// componentWillUnmount

// useEffect is a hook that allows me to produce side effects on my components
// useEffect is anything that reaches out of the component, such as:
// * network request
// * DOM manipulation
// * timeouts
// * intervals
// * event Listeners

import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    setColor(randomcolor);
  }, [count]);
  // if [count] array is empty, this useEffect will only run once

  return (
    <div className='content'>
      <h1 style={{ color: color }}>{count}</h1>
      <br />
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
