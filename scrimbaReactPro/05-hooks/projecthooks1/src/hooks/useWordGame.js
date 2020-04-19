// Custom Hooks
import { useState, useRef, useEffect } from 'react';

function useWordGame(startingTime = 3) {
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(' ');
    return wordsArr.filter((word) => word !== '').length;
  }

  function decrementTimeRemaining() {
    setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(startingTime);
    setWordCount(0);
    setText('');
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(decrementTimeRemaining, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    text,
    timeRemaining,
    isTimeRunning,
    wordCount,
    textBoxRef,
    handleChange,
    startGame,
  };
}

export default useWordGame;
