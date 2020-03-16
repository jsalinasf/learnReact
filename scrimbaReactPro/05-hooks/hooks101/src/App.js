import React, { useState } from 'react';

function App() {
  const [answer, setAnswer] = useState('true');

  function handleChangeAnswer() {
    setAnswer(!answer);
  }

  return (
    <div>
      <h1>React Hooks</h1>
      <p>My first hook: {answer === true ? 'Yes' : 'No'}</p>
      <button onClick={handleChangeAnswer}>Change Answer</button>
    </div>
  );
}

export default App;
