import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CustomButton.scss';

const propTypes = {
  className: PropTypes.oneOf([
    'transparentButton',
    'completed',
  ]).isRequired,
  content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element,
  ]).isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: () => {},
};

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.onClick(e);
  }

  render() {
    const { className, content } = this.props;

    return (
      <button
        type="button"
        className={`btn customButton ${className}`}
        onClick={this.onClick}
      >
        {content}
      </button>
    );
  }
}

CustomButton.propTypes = propTypes;
CustomButton.defaultProps = defaultProps;

export default CustomButton;
