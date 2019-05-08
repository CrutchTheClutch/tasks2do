import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTasks } from 'react-icons/fa';
import { IoMdAdd, IoMdSettings } from 'react-icons/io';

import './Navbar.scss';

import CustomButton from '../CustomButton';
import SettingsMenu from '../SettingsMenu/SettingsMenu';

const propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  nightMode: PropTypes.bool.isRequired,
  updateTheme: PropTypes.func.isRequired,
};

const defaultProps = {

};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleSettingsMenu = this.toggleSettingsMenu.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggleSettingsMenu() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { loggedIn, nightMode, updateTheme } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="navbar align-items-center">
        <div className="col-7 col-sm-3 col-md-3 p-0">
          <div className="logo">
            <FaTasks className="icon" />
            <div className="brandName d-inline-block align-middle">tasks2do</div>
          </div>
        </div>
        <div className="d-none d-sm-block col-sm-6 col-md-6 p-0" />
        <div className="col-5 col-sm-3 col-md-3 p-0 text-right">
          {loggedIn ? (
            <CustomButton content={<IoMdAdd className="icon" />} />
          ) : (
            null
          )}
          <CustomButton
            content={
              <IoMdSettings className="icon" />
            }
            onClick={this.toggleSettingsMenu}
          />
          <SettingsMenu
            isOpen={isOpen}
            loggedIn={loggedIn}
            nightMode={nightMode}
            updateTheme={updateTheme}
          />
        </div>
      </div>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
