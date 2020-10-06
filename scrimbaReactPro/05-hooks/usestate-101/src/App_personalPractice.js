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

  // It is possible to use more than one useEffect

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    // this return will behave like componentWillUnmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div className='content'>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
};

export default App;
