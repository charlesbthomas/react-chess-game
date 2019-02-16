import React, { Component } from 'react';
import Game from './component/Game'
import './App.css';
let chessRules = require('chess-rules')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game chessRules={chessRules}/>
      </div>
    );
  }
}

export default App;
