import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  // Some manually added event doesn't get cleaned up automatically such as:
  // document.addEventLister(...)
  // Socket Subscriptions - ex: chat apps
  // This is when Component LifeCycle ComponentWillUnmount kicks in

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      setColor(randomcolor());
    }, 1000);
  }, []);

  return (
    <div className='counter'>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}

export default App;
