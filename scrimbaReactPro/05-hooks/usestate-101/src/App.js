import React, { useState } from 'react';

const App = () => {
  let [count, setCount] = useState(0);
  function increaseCount(prevCount) {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div class='content'>
      <h2>Just a counter:</h2>
      <h3>{count}</h3>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default App;
