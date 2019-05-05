import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTasks } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';

import './Navbar.scss';

import TransparentButton from '../TransparentButton';

const propTypes = {

};

const defaultProps = {

};

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="col-8 col-sm-3 col-md-3 p-0">
          <div className="logo">
            <FaTasks className="icon" />
            <div className="brandName d-inline-block align-middle">tasks2do</div>
          </div>
        </div>
        <div className="d-none d-sm-block col-sm-6 col-md-6 p-0" />
        <div className="col-4 col-sm-3 col-md-3 p-0 text-right">
          <TransparentButton
            content={<IoMdAdd className="icon" />}
          />
        </div>
      </div>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
