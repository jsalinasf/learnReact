import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  // useEffect run everytime the component changes!
  // I can have multiple useEffects

  // componentDidMount userEffect(() => {}, [])  --- Empty array, it runs once when the component mounts
  // componentDidUpdate userEffect(() => {}, [myVariable]) --- it runs everytime thaat "myVariable" updates
  // componentDidUnmount --- return () => {some function to clean}  --- it runs when componment unmounts and cleans any side effects that we created

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCounter => prevCounter + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button>Start</button>
    </div>
  );
}

export default App;
