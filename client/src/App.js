import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.scss';

import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

const propTypes = {
  themePrefix: PropTypes.string,
};

const defaultProps = {
  themePrefix: 'theme-',
};

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  constructor(props) {
    super(props);
    this.updateTheme = this.updateTheme.bind(this);
    this.state = {
      loggedIn: true,
      nightMode: false,
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
    const { nightMode, themeName } = this.state;

    const root = document.getElementById('root');

    if (!root) {
      return;
    }

    const oldTheme = (`${themePrefix}${themeName}`);
    const newTheme = (`${themePrefix}${newThemeName}`);

    if (root.classList.contains(`${oldTheme}`)) {
      root.classList.remove(oldTheme);
    }

    if (newThemeName) {
      this.setState({
        themeName: newThemeName,
        nightMode: !nightMode,
      });
      root.classList.add(`${newTheme}`);
    }
  }

  render() {
    const { loggedIn, nightMode } = this.state;

    return (
      <ApolloProvider client={client}>
        <main id="app-root" className="d-flex flex-column">
          <Navbar
            loggedIn={loggedIn}
            nightMode={nightMode}
            login={this.login}
            updateTheme={this.updateTheme}
          />
          <div className="p-0 flex-grow-1">
            <TaskList />
          </div>
          <Footer />
        </main>
      </ApolloProvider>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
