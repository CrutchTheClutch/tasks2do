import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CustomButton.scss';

const classNames = ['transparentButton', 'completed'];
export type classNames = (typeof classNames)[number];

interface Props {
  className?: classNames;
  content: object | Element;
  onClick: Function;
}

class CustomButton extends Component<Props, {}> {
  static propTypes = {
    className: PropTypes.oneOf(classNames),
    content: PropTypes.oneOfType([PropTypes.object, PropTypes.element]).isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    className: 'transparentButton',
    onClick: () => { },
  };

  constructor(props: Props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick();
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

export default CustomButton;
