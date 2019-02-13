import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import web3 from './ethereum/web3';
import SlotMachine from './ethereum/simpleStorage';
import { Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button primary>Enter</Button>
        </header>
      </div>
    );
  }
}

export default App;
