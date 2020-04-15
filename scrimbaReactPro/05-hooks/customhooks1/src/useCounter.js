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
  return { count, increment };
}

export default useCounter;
