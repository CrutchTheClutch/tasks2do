import * as React from 'react';
import './CustomButton.scss';

const classNames = ['transparentButton', 'completed'];
export type classNames = (typeof classNames)[number];

interface Props {
  className?: classNames;
  content: JSX.Element;
  onClick: Function;
}

class CustomButton extends React.Component<Props, {}> {
  public static defaultProps = {
    className: 'transparentButton',
    onClick: (): void => { },
  };

  public constructor(props: Props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  public onClick(): void {
    const { onClick } = this.props;
    onClick();
  }

  public render(): JSX.Element {
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
