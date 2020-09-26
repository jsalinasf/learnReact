import React, { useState } from 'react';

const App = () => {
  const [answer, setAnswer] = useState('Yes');

  function updateAnswer() {
    setAnswer(answer === 'Yes' ? 'No' : 'Yes');
  }

  return (
    <div class='content'>
      <h1>Is it important to learn React?</h1>
      <h2>{answer}</h2>
      <button onClick={updateAnswer}>Change Answer</button>
    </div>
  );
};

export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       answer: 'No',
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Is it important to learn React? {this.state.answer}</h1>
//       </div>
//     );
//   }
// }

// export default App;
