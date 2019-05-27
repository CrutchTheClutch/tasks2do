import React, { Component } from 'react';
import { IoIosMoon, IoMdArrowDropup, IoMdPerson } from 'react-icons/io';
import { UserNameQueryProps } from '../../providers/UserNameQuery';
import MenuItem from '../MenuItem';
import './SettingsMenu.scss';

interface Props extends Partial<UserNameQueryProps> {
  isOpen?: boolean;
  loggedIn?: boolean;
  nightMode?: boolean;
  updateTheme: Function;
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
   * Sets the userName within the SettingsMenu
   *
   * Uses data from UserNameQuery.
   */
  public setUserMenuItem(): JSX.Element {
    const { loggedIn, loading, error, data } = this.props;

    let userMenuItem;

    if (loading) {
      userMenuItem = (
        <MenuItem icon={<IoMdPerson className="icon" />} text="Loading..." />
      );
    }

    if (error) {
      userMenuItem = (
        <MenuItem icon={<IoMdPerson className="icon" />} text="ERROR" />
      );
    }

    if (!loggedIn) {
      userMenuItem = (
        <MenuItem icon={<IoMdPerson className="icon" />} text="Guest" />
      );
    }

    if (!userMenuItem && data) {
      userMenuItem = (
        <MenuItem
          icon={<IoMdPerson className="icon" />}
          text={data.user.name}
        />
      );
    }

    if (userMenuItem) {
      return userMenuItem;
    }

    return <MenuItem icon={<IoMdPerson className="icon" />} text="UNDEFINED" />;
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
    const { isOpen, nightMode } = this.props;

    return (
      <React.Fragment>
        <div
          className={`settings-menu dropdown-menu dropdown-menu-right ${
            isOpen ? ' show' : ''
          }`}
        >
          <IoMdArrowDropup className="dropdown-caret outline" />
          <IoMdArrowDropup className="dropdown-caret fill" />
          <React.Fragment>{this.setUserMenuItem()}</React.Fragment>
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
