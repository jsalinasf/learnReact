// Custom Hooks

import React from 'react';
import useCounter from './useCounter';

function App() {
  // Option 1: Destructuring as an array
  // Flexible because I can use whatever names I want since arrays manages indexes
  const [number, add] = useCounter();

  // Option 2: Destructuring as an object
  // Not very flexible because the component MUST use the exact names the custom hook is returning
  // const { count, increment } = useCounter();

  return (
    <div>
      <h1>The count is: {number}</h1>
      <button onClick={add}>Add 1</button>
    </div>
  );
}

export default App;
