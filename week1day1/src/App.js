import React from 'react';
import upper, {text1,text2, text3} from "./file1";
import './App.css';

function App() {
  return (
    <div className="App">
    <p>{upper(text3)}</p>
    </div>
  );
}

export default App;
