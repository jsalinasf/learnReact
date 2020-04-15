// Custom Hooks
import { useState } from 'react';

function useCounter() {
  // 1. Initialize State
  const [count, setCount] = useState(0);

  // 2. Create any functions we need for modifying state
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  // 3. Return whatever we want another component to have access to (count, increment)

  // There are two ways to do it

  // Option 1: returning an array, more flexible because the component can name the
  // returned values as he pleases
  return [count, increment];

  // Option 2: returning an object
  // Not very flexible because the component MUST use the exact names my object is returning
  // return { count, increment };
}

export default useCounter;
