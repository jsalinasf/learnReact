import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className='counter'>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     return (
//       <div className='counter'>
//         <h1>{this.state.count}</h1>
//         <button>Change!</button>
//       </div>
//     );
//   }
// }

// export default App;
