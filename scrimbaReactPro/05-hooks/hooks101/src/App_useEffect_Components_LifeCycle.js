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

  // Examples of things that have side effects outside the component
  // that will require MANUAL cleanup
  // document.addEventListener...
  // socket subscription

  // We can use more than one useEffect

  // component willMount
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // To clear the Interval, useEffect has to return a cleanup function
    // componentWillUnmount
    return () => clearInterval(intervalId);
  }, []);

  // component willUpdate
  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}

export default App;
