import * as React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import './App.scss';

interface Props {
  themePrefix: string;
}

interface State {
  addTaskVisible: boolean;
  loggedIn: boolean;
  nightMode: boolean;
  themeName: string;
}

class App extends React.Component<Props, State> {
  public static defaultProps = {
    themePrefix: 'theme-',
  };

  public constructor(props: Props) {
    super(props);
    this.updateTheme = this.updateTheme.bind(this);
    this.toggleAddTask = this.toggleAddTask.bind(this);
    this.state = {
      addTaskVisible: false,
      loggedIn: true,
      nightMode: false,
      themeName: 'dark',
    };
  }

  public componentDidMount(): void {
    const { themeName } = this.state;
    this.updateTheme(themeName);
  }

  /**
   * Update's App overall theme.
   *
   * Call this function with a theme name as an argument.
   * Ex: this.updateTheme('light'); or this.updateTheme('dark');
   */
  public updateTheme(newThemeName: string): void {
    const { themePrefix } = this.props;
    const { nightMode, themeName } = this.state;

    const root = document.getElementById('root');

    if (!root) {
      return;
    }

    const oldTheme = `${themePrefix}${themeName}`;
    const newTheme = `${themePrefix}${newThemeName}`;

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

  public toggleAddTask(): void {
    const { addTaskVisible } = this.state;
    this.setState({
      addTaskVisible: !addTaskVisible,
    });
  }

  public render(): JSX.Element {
    const { loggedIn, nightMode, addTaskVisible } = this.state;

    return (
      <main id="app-root" className="d-flex flex-column">
        <Navbar
          toggleAddTask={this.toggleAddTask}
          loggedIn={loggedIn}
          nightMode={nightMode}
          // login={this.login}
          updateTheme={this.updateTheme}
        />
        <TaskList addTaskVisible={addTaskVisible} toggleAddTask={this.toggleAddTask} />
        <Footer />
      </main>
    );
  }
}

export default App;
