import { useState, useEffect, useRef } from 'react';

function useWordGame(startingTime = 10) {
  const [remainingTime, setRemainingTime] = useState(startingTime);
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
    setRemainingTime(startingTime);
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

  return {
    refTextArea,
    handleChange,
    text,
    isTimeRunning,
    remainingTime,
    handleClick,
    wordCount,
  };
}

export default useWordGame;
