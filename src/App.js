import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, try to find what will be used for the back-end ! :)
        </p>
        <p>
          <iframe src="https://giphy.com/embed/18hwXXbrTpDws" width="480" height="480" frameBorder="0"
                  className="giphy-embed" allowFullScreen title="time-to-be-productive"></iframe>
        </p>
      </div>
    );
  }
}

export default App;


// todo 1. Rewrite README
// todo 2. See if adding Flow could be great :)
// todo 3. Add a linter (eslint ?)
// todo 4. Add a router (maybe React Router should be the easiest way ?)
// todo 5. Add JavaScript debug in WS
// todo 6. Add a code formatter (Prettier ?)
// todo 7. TU
