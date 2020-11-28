import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  
  const handleChange = (e) => {
    const {value} = e.target;
    setText(value);
  }

  const countWords = (text) => {
    let wordsArr = text.trim().split(" ");
    
    let filteredWords = wordsArr.filter(word => (word !== ""))
    console.log(filteredWords.length)
    return filteredWords.length;
    
    // let count = 0;
    // for (let i=0; i<text.length; i++){
    //       count += 1;
    // }

    // return count;
  }

  useEffetc(() => {}, [])

  return (
    <div>
      <h1>How fast do you type?</h1>

      <textarea 
          onChange={handleChange} 
          value={text} 
      />

n     <h4>Time remaining: {timeRemaining}</h4>

      <button onClick={() => countWords(text)}>Start</button>

      <h1>Word Count: ???</h1>
    </div>
  );
}

export default App;
