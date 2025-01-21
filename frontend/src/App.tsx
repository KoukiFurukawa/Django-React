import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);
  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
  
  const DrawCount = async () => {
    if (isStart) return;
    setIsStart(true);
    for (let i = 0; i < 100; i++) {
      setCount(i);
      await sleep(1000);
    }
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1> {count} </h1>
      <button type='button' onClick={DrawCount}> カウントアップ </button>
    </div>
  );
}

export default App;
