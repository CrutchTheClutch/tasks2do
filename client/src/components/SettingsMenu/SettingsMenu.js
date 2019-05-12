import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoIosMoon, IoMdArrowDropup, IoMdPerson } from 'react-icons/io';

import './SettingsMenu.scss';

import CustomButton from '../CustomButton';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  nightMode: PropTypes.bool.isRequired,
  updateTheme: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

const defaultProps = {
  userName: 'Guest',
};

class SettingsMenu extends Component {
  constructor(props) {
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

SettingsMenu.propTypes = propTypes;
SettingsMenu.defaultProps = defaultProps;

export default SettingsMenu;
