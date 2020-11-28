import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  
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
    setTimeRemaining(5);
  }

  //End Game
  const endGame = () => {

  }

  return (
    <div>
      <h1>How fast do you type?</h1>

      <textarea 
          onChange={handleChange} 
          value={text} 
      />

     <h4>Time remaining: {timeRemaining}</h4>

      <button id="start" onClick={startGame}>Start</button>
  
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
