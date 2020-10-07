import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const STARTING_TIME = 5;
  const MIN_WORD_LENGTH = 2;
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const textAreaRef = useRef(null);

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleClick() {
    startGame();
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText('');
    setWordCount(0);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  }

  function stopGame() {
    setWordCount(countWords(text));
    setIsTimeRunning(false);
  }

  function countWords(receivedText) {
    let filteredWords = receivedText.trim().split(' ');
    return filteredWords.filter((word) => word.length >= MIN_WORD_LENGTH)
      .length;
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      stopGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      ></textarea>
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={handleClick} disabled={isTimeRunning}>
        START
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
};

export default App;

// import React, { useState, useEffect, useRef } from 'react';

// // Set the minimum length for words to be counted
// const MIN_WORD_LENGTH = 2;
// // set Initial Timer in seconds for the game
// const STARTING_TIME = 5;

// const App = () => {
//   const [text, setText] = useState('');
//   const [wordCount, setWordCount] = useState('0');
//   const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
//   const [isTimeRunning, setIsTimeRunning] = useState(false);
//   const textAreaRef = useRef(null);

//   function handleChange(event) {
//     setText(event.target.value);
//   }

//   function calculateWordCount(receivedText) {
//     let filteredWords = receivedText.trim().split(' ');
//     return filteredWords.filter((word) => word.length >= MIN_WORD_LENGTH)
//       .length;
//   }

//   function handleClick() {
//     startGame();
//   }

//   function startGame() {
//     setIsTimeRunning(true);
//     setTimeRemaining(STARTING_TIME);
//     setWordCount(0);
//     setText('');
//     textAreaRef.current.disabled = false;
//     textAreaRef.current.focus();
//   }

//   function endGame() {
//     setWordCount(calculateWordCount(text));
//     setIsTimeRunning(false);
//   }

//   useEffect(() => {
//     if (isTimeRunning && timeRemaining > 0) {
//       setTimeout(() => {
//         setTimeRemaining((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (timeRemaining === 0) {
//       endGame();
//     }
//   }, [timeRemaining, isTimeRunning]);

//   return (
//     <div>
//       <h1>How fast do you type?</h1>
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
//       <h1>word count: {wordCount}</h1>
//     </div>
//   );
// };

// export default App;
