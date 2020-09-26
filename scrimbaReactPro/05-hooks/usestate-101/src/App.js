import React, { useState } from 'react';

const App = () => {
  let [count, setCount] = useState(0);
  function increaseCount(prevCount) {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div class='content'>
      <p>Just a counter:</p>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default App;
