import React, { Component } from 'react';
// import {Link} from 'react-router';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}></img>
          <h1 className="App-title">SHELFIE</h1>
        </header>
        <div className="Shelf-main">
          {/* <Link to='/Suffff/' className='btn'>Shelf A</Link> */}
          <button className='btn'>Shelf A</button>
          <button className='btn'>Shelf B</button>
          <button className='btn'>Shelf C</button>
          <button className='btn'>Shelf D</button>
        </div>
      </div>
    );
  }
}

export default App;
