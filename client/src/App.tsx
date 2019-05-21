import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.scss';

interface Props {
  themePrefix?: string;
}

interface State {
  loggedIn: boolean;
  nightMode: boolean;
  themeName: string;
}

class App extends Component<Props, State> {
  static propTypes = {
    themePrefix: PropTypes.string,
  };

  static defaultProps = {
    themePrefix: 'theme-',
  };

  constructor(props: Props) {
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
  updateTheme(newThemeName: string) {
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
      <main id="app-root" className="d-flex flex-column">
        <Navbar
          loggedIn={loggedIn}
          nightMode={nightMode}
          // login={this.login}
          updateTheme={this.updateTheme}
        />
        <div className="p-0 flex-grow-1">
          <TaskList />
        </div>
        <Footer />
      </main>
    );
  }
}

export default App;
