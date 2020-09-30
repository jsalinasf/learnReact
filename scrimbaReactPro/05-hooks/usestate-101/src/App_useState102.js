import React, { useState } from 'react';

const App = () => {
  let [count, setCount] = useState(0);

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decreaseCount() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div class='content'>
      <p>Just a counter:</p>
      <h1>{count}</h1>
      <div>
        <button onClick={increaseCount}>Increase</button>
      </div>
      <div>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  );
};

export default App;
