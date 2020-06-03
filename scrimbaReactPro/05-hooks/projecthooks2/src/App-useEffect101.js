import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  function decrease() {
    setCount((prevCount) => prevCount - 1);
  }

  function increase() {
    setCount((prevCount) => prevCount + 1);
  }

  // it runs every time 'count' changes its value
  // Component lifecycle: Component Did Update
  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  // it runs only when component mounts
  // Component lifecycle: Component Did Mount - Check how the array passed as a second argument
  // to useEffect is empty
  // useEffect(() => {
  //   setColor(randomcolor());
  // }, []);

  return (
    <div className='counter'>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={decrease}>Decrement</button>
      <button onClick={increase}>Increment</button>
    </div>
  );
}

export default App;
