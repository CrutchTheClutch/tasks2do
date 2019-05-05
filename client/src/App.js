import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const propTypes = {
  themePrefix: PropTypes.string,
};

const defaultProps = {
  themePrefix: 'theme-',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.updateTheme = this.updateTheme.bind(this);
    this.state = {
      themeName: 'dark',
    };
  }

  componentDidMount() {
    this.updateTheme(this.state.themeName);
  }

  // Update's App overall theme.
  //
  // Call this function with a theme name as an argument.
  // Ex: this.updateTheme('light'); or this.updateTheme('dark');
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
      <main id="app-root" className="d-flex flex-column">
        <Navbar />
        <div className="p-0 flex-grow-1">
          {/* <h1 className="title">Light theme</h1>
          <button
            className="button"
            type="button"
            onClick={() => this.updateTheme('light')}
            >
              {'A button'}
            </button>
          <h1 className="title">Dark theme</h1>
          <button
            className="button"
            type="button"
            onClick={() => this.updateTheme('dark')}
            >
              {'A button'}
            </button> */}
          <p>
            {'default'}
          </p>
        </div>
        <Footer />
      </main>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
