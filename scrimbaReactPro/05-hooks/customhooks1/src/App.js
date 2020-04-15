import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}

export default App;
