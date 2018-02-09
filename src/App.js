import React, { Component } from 'react';
// import {Link} from 'react-router';
import logo from './logo.png';
import './App.css';
import router from './router';
// import { HashRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}></img>
          <h1 className="App-title">SHELFIE</h1>
        </header>
        <div>
          {router}
        </div>
      </div>
    );
  }
}

export default App;
