import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.scss';

const propTypes = {
  themePrefix: PropTypes.string,
  updateTheme: PropTypes.func,
};

const defaultProps = {
  themePrefix: 'theme-',
  updateTheme: () => {},
};

class App extends Component {
  constructor(props) {
    super(props);
    this.updateTheme = this.updateTheme.bind(this);
    this.state = {
      themeName: '',
    };
  }

  componentDidMount() {
    this.updateTheme(this.state.themeName);
  }

  updateTheme(newThemeName) {
    const { themePrefix } = this.props;
    const { themeName } = this.state;

    const root = document.getElementById('root');

    const oldTheme = (`${themePrefix}${themeName}`);
    const newTheme = (`${themePrefix}${newThemeName}`);

    if (root.classList.contains(`${oldTheme}`)) {
      root.classList.remove(oldTheme);
    }

    if (newThemeName) {
      this.setState({
        themeName: newThemeName,
      });
      root.classList.add(`${newTheme}`);
    }
  }

  render() {
    return (
      // <main id="app-root" className={themePrefix + theme}>
      <main id="app-root">
        <h1 className="title">Light theme</h1>
        <button className="button" type="button" onClick={() => this.updateTheme('light')}>A button</button>
        <h1 className="title">Dark theme</h1>
        <button className="button" type="button" onClick={() => this.updateTheme('dark')}>A button</button>
        <p>
          test LOL
        </p>
      </main>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
