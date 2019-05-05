import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TransparentButton.scss';

const propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element,
  ]).isRequired,
};

const defaultProps = {

};


// eslint-disable-next-line react/prefer-stateless-function
class TransparentButton extends Component {
  render() {
    const { content } = this.props;

    return (
      <button type="button" className="btn transparentButton">
        {content}
      </button>
    );
  }
}

TransparentButton.propTypes = propTypes;
TransparentButton.defaultProps = defaultProps;

export default TransparentButton;
