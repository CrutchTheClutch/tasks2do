import React, { Component } from 'react';
import { IoIosMoon, IoMdArrowDropup, IoMdPerson } from 'react-icons/io';
import MenuItem from '../MenuItem';
import './SettingsMenu.scss';

interface Props {
  isOpen?: boolean;
  loggedIn?: boolean;
  nightMode?: boolean;
  updateTheme: Function;
  userName: string;
}

class SettingsMenu extends Component<Props, {}> {
  public static defaultProps = {
    isOpen: false,
    loggedIn: false,
    nightMode: true,
    userName: 'Guest',
  };

  public constructor(props: Props) {
    super(props);
    this.toggleNightMode = this.toggleNightMode.bind(this);
  }

  /**
   * Toggle's Between 'Light' theme and 'Dark' theme.
   *
   * Call this function to toggle night mode.
   */
  public toggleNightMode(): void {
    const { nightMode, updateTheme } = this.props;
    if (nightMode) {
      updateTheme('light');
    } else {
      updateTheme('dark');
    }
  }

  public render(): JSX.Element {
    const { isOpen, loggedIn, nightMode, userName } = this.props;
    return (
      <React.Fragment>
        <div
          className={`settings-menu dropdown-menu dropdown-menu-right ${
            isOpen ? ' show' : ''
          }`}
        >
          <IoMdArrowDropup className="dropdown-caret outline" />
          <IoMdArrowDropup className="dropdown-caret fill" />
          {loggedIn ? (
            <MenuItem icon={<IoMdPerson className="icon" />} text={userName} />
          ) : (
            <MenuItem icon={<IoMdPerson className="icon" />} text="Login" />
          )}
          <MenuItem
            icon={
              <IoIosMoon className={`icon${nightMode ? ' nightMode' : ''}`} />
            }
            text="Night Mode"
            onClick={this.toggleNightMode}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SettingsMenu;
