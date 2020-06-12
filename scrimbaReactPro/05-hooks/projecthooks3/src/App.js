import React, { useState, useEffect, useRef } from 'react';
import Tips from './components/Tips';

function App() {
  const STARTING_TIME = 5;

  const [remainingTime, setRemainingTime] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const refTextArea = useRef(null);

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function handleClick() {
    startGame();
  }

  function countWords(userText) {
    const num = userText
      .trim()
      .split(' ')
      .filter((word) => word !== '' && word.length > 2);
    return num.length;
  }

  function startGame() {
    setText('');
    setIsTimeRunning(true);
    setRemainingTime(STARTING_TIME);
    setWordCount(0);
    refTextArea.current.disabled = false;
    refTextArea.current.focus();
  }

  function stopGame() {
    setIsTimeRunning(false);
    setWordCount(countWords(text));
  }

  useEffect(() => {
    if (isTimeRunning && remainingTime > 0) {
      setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      stopGame();
    }
  }, [isTimeRunning, remainingTime]);

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea
        ref={refTextArea}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      ></textarea>
      <h4>Time Remaining: {remainingTime}</h4>
      <button onClick={handleClick} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
      <Tips disabled={isTimeRunning} />
    </div>
  );
}

export default App;

// import React, { useState, useEffect, useRef } from 'react';

// function App() {
//   const STARTING_TIME = 5;

//   const [text, setText] = useState('');
//   const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
//   const [isTimeRunning, setIsTimeRunning] = useState(false);
//   const [wordCount, setWordCount] = useState(0);
//   const textAreaRef = useRef(null);

//   function handleChange(event) {
//     const { value } = event.target;
//     setText(value);
//   }

//   function calculateWordCount(text) {
//     const wordArr = text
//       .trim()
//       .split(' ')
//       .filter((element) => element !== '');
//     return wordArr.length;
//   }

//   function startGame() {
//     setTimeRemaining(STARTING_TIME);
//     setText('');
//     setIsTimeRunning(true);
//     setWordCount(0);
//     textAreaRef.current.disabled = false;
//     textAreaRef.current.focus();
//   }

//   function stopGame() {
//     setWordCount(calculateWordCount(text));
//     setIsTimeRunning(false);
//   }

//   function handleClick() {
//     startGame();
//   }

//   useEffect(() => {
//     if (timeRemaining > 0 && isTimeRunning) {
//       setTimeout(() => setTimeRemaining((prevTime) => prevTime - 1), 1000);
//     } else if (timeRemaining === 0) {
//       stopGame();
//     }
//   }, [timeRemaining, isTimeRunning]);

//   return (
//     <div>
//       <h1>How fast can you type?</h1>
//       <textarea
//         ref={textAreaRef}
//         value={text}
//         onChange={handleChange}
//         disabled={!isTimeRunning}
//       />
//       <h4>Time remaining: {timeRemaining}</h4>
//       <button onClick={handleClick} disabled={isTimeRunning}>
//         Start
//       </button>
//       <h1>Word count: {wordCount}</h1>
//     </div>
//   );
// }

// export default App;
