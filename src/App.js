import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withState } from 'recompose'

const Testable = () => {
  useEffect(() => {
    console.log(1)
  }, [])
}

const App = () => {
  Testable()
  return (
    <div className="App">
      1
    </div>
  );
}



export default App;
