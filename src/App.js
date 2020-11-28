import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const restartBtn = document.getElementById('restart');
  const startBtn = document.getElementById('start');
  
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
      setIsTimeRunning(false);
      setWordCount(countWords(text));
      showRestart();
    }

  }, [timeRemaining, isTimeRunning]);

  const showRestart = () => {
    restartBtn.style.display = "block";
    startBtn.style.display = "none";
  }

  const reStart = () => {
    wordCount;

  }

  return (
    <div>
      <h1>How fast do you type?</h1>

      <textarea 
          onChange={handleChange} 
          value={text} 
      />

     <h4>Time remaining: {timeRemaining}</h4>

      <button id="start" onClick={() => setIsTimeRunning(true)}>Start</button>
      <button style={{display: "none"}} id="restart" onClick={reStart()}>Re-Start</button>

      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
