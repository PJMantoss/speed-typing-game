import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  
  const handleChange = (e) => {
    const {value} = e.target;
    setText(value);
  }

  const countWords = (text) => {
    let wordsArr = text.split(" ");
    console.log(wordsArr.length)
    return wordsArr.length;
    // let count = 0;
    // for (let i=0; i<text.length; i++){
    //       count += 1;
    // }

    // return count;
  }

  return (
    <div>
      <h1>How fast do you type?</h1>

      <textarea 
          onChange={handleChange} 
          value={text} 
      />

      <h4>Time remaining: ???</h4>

      <button onClick={() => countWords(text)}>Start</button>

      <h1>Word Count: ???</h1>
    </div>
  );
}

export default App;
