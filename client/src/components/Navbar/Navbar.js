import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTasks } from 'react-icons/fa';
import { IoMdAdd, IoIosMoon } from 'react-icons/io';

import './Navbar.scss';

import CustomButton from '../CustomButton';

const propTypes = {
  nightMode: PropTypes.bool.isRequired,
  updateTheme: PropTypes.func.isRequired,
};

const defaultProps = {

};

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNightMode = this.toggleNightMode.bind(this);
  }

  toggleNightMode() {
    const { nightMode, updateTheme } = this.props;
    if (nightMode) {
      updateTheme('light');
    } else {
      updateTheme('dark');
    }
  }

  render() {
    const { nightMode } = this.props;
    return (
      <div className="navbar">
        <div className="col-7 col-sm-3 col-md-3 p-0">
          <div className="logo">
            <FaTasks className="icon" />
            <div className="brandName d-inline-block align-middle">tasks2do</div>
          </div>
        </div>
        <div className="d-none d-sm-block col-sm-6 col-md-6 p-0" />
        <div className="col-5 col-sm-3 col-md-3 p-0 text-right">
          <CustomButton className="transparentButton" content={<IoMdAdd className="icon" />} />
          <CustomButton
            className="transparentButton"
            content={
              <IoIosMoon className={`icon${nightMode ? ' nightMode' : ''}`} />
            }
            onClick={this.toggleNightMode}
          />
        </div>
      </div>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
