import React, { useState } from "react";

function App() {
  const [answer] = useState("Yes");

  return (
    <div>
      <h1>React Hooks 101</h1>
      <p>Is it important to learn react hooks?</p>
      <p>R: {answer}</p>
    </div>
  );
}

export default App;
