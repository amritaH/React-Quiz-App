import React, { Component } from 'react';
import logo from './logo.svg';
// import QuizList from './Components/QuizList.js';
import './App.css';
import StartButton from './Components/StartButton.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Quiz App</h1>
        </header>
        <StartButton />
      </div>
    );
  }
}

export default App;
