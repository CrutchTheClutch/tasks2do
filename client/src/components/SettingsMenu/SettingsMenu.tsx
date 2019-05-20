import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoIosMoon, IoMdArrowDropup, IoMdPerson } from 'react-icons/io';

import './SettingsMenu.scss';

import CustomButton from '../CustomButton';

interface Props {
  isOpen?: boolean;
  loggedIn?: boolean;
  nightMode?: boolean;
  updateTheme: Function;
  userName?: string;
}

class SettingsMenu extends Component<Props, {}> {
  static propTypes = {
    isOpen: PropTypes.bool,
    loggedIn: PropTypes.bool,
    nightMode: PropTypes.bool,
    updateTheme: PropTypes.func.isRequired,
    userName: PropTypes.string,
  };
  
  static defaultProps = {
    isOpen: false,
    loggedIn: false,
    nightMode: true,
    userName: 'Guest',
  };

  constructor(props: Props) {
    super(props);
    this.toggleNightMode = this.toggleNightMode.bind(this);
  }

  // Toggle's Between 'Light' theme and 'Dark' theme.
  //
  // Call this function to toggle night mode.S
  toggleNightMode() {
    const { nightMode, updateTheme } = this.props;
    if (nightMode) {
      updateTheme('light');
    } else {
      updateTheme('dark');
    }
  }

  render() {
    const {
      isOpen, loggedIn, nightMode, userName,
    } = this.props;
    return (
      <React.Fragment>
        <div className={`settings-menu dropdown-menu dropdown-menu-right ${isOpen ? ' show' : ''}`}>
          <IoMdArrowDropup className="dropdown-caret outline" />
          <IoMdArrowDropup className="dropdown-caret fill" />
          {loggedIn ? (
            <CustomButton
              content={(
                <div className="align-items-center d-inline-flex">
                  <IoMdPerson className="icon" />
                  <div className="menu-item-text text-break-all">{userName}</div>
                </div>
              )}
              onClick={this.toggleNightMode}
            />
          ) : (
            <CustomButton
              content={(
                <div className="align-items-center d-inline-flex">
                  <IoMdPerson className="icon" />
                  <div className="menu-item-text text-break-all">Login</div>
                </div>
              )}
              onClick={this.toggleNightMode}
            />
          )}
          <CustomButton
            content={(
              <div className="align-items-center d-inline-flex">
                <IoIosMoon className={`icon${nightMode ? ' nightMode' : ''}`} />
                <div className="menu-item-text">Night Mode</div>
              </div>
            )}
            onClick={this.toggleNightMode}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SettingsMenu;
