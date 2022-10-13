import React, { useState } from 'react';
import Result from './components/Result';
import Buttons from './components/Buttons';
import './App.css';

let output = '';
let result = '';
let operator = ['+', '-', '*', '/'];

function App() {
  const [state, setState] = useState({
    result: '',
    display: '',
  });

  const handleClick = (e) => {
    let value = e.target.value;
    if (value === '=') {
      if (operator.includes(output[output.length - 1])) {
        output = output.slice(0, -1);
        console.log(output)
      }
      result = eval(output).toString();
      setState({
        result: result,
        display: result,
      });
    } else if (value === 'C') {
      output = '';
      result = '';
      setState({
        result: result,
        display: result,
      });
    } else if (value === 'CE') {
      output = output.slice(0, -1);
      setState({
        result: result,
        display: output,
      });
    } else {
      output += value;
      setState({
        result: result,
        display: output,
      });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Result output={state.display} />
        <Buttons handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;

