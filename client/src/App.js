import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <h1>APP IS RUNNING</h1>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
