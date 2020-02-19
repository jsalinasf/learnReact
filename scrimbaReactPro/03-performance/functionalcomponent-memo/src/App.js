import React, { useState } from 'react';
import GrandParent from './components/GrandParent';

const App = props => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  console.log(
    '-------------------------------------------------------------------------------'
  );

  return (
    <div>
      <button onClick={incrementCount}>Current Count: {count}</button>
      <h1>App Component</h1>
      {/* When App first loads, both of GrandParents components should load */}
      {/* Then, when state changes, only */}
      {/* first GrandParent and its tree will re render */}
      {/* Open Browser console*/}
      <GrandParent count={count} />
      <GrandParent />
    </div>
  );
};

export default App;
