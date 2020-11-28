import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const STARTING_TIME = 6;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);
  
  const handleChange = (e) => {
    const {value} = e.target;
    setText(value);
  }

  const countWords = (text) => {
    let wordsArr = text.trim().split(" ");
    
    let filteredWords = wordsArr.filter(word => (word !== ""))

      return filteredWords.length;
  }

  useEffect(() => {

    if(isTimeRunning && timeRemaining > 0){
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000)
    } else if (timeRemaining === 0){
      endGame();
    }

  }, [timeRemaining, isTimeRunning]);

  //Re-start Game
  const startGame = () => {
    setIsTimeRunning(true);
    setText("");
    setWordCount(0);
    setTimeRemaining(STARTING_TIME);
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  //End Game
  const endGame = () => {
    setIsTimeRunning(false);
    setWordCount(countWords(text));
  }

  return (
    <div>
      <h1>How fast do you type?</h1>

      <textarea 
          onChange={handleChange} 
          value={text} 
          disabled={!isTimeRunning}
          ref={textBoxRef}
      />

     <h4>Time remaining: {timeRemaining}</h4>

      <button 
          onClick={startGame} 
          disabled={isTimeRunning}
        >Start</button>
  
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
