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
    // this useEffect runs only once (Component Will Mount)
    // hence we only have one instance of setInterval
    const intervalID = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // this return is used as "Component Will Unmount"
    return () => clearInterval(intervalID);
  }, []);

  // You can use useEffect more than once

  useEffect(() => {
    // this useEffect runs every time 'count' gets updated (Component Did Update)
    setColor(randomcolor());
  }, [count]);

  return (
    <div className='counter'>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}

export default App;
