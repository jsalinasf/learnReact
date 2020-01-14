import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button>Start</button>
    </div>
  );
}

export default App;
