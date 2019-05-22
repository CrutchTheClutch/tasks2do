import * as React from 'react';
import './MenuItem.scss';

interface Props {
  icon?: JSX.Element;
  text: string;
  onClick: Function;
}

class MenuItem extends React.Component<Props, {}> {
  public static defaultProps = {
    icon: null,
    onClick: (): void => {},
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
    const { icon, text } = this.props;

    return (
      <button type="button" className="menu-item" onClick={this.onClick}>
        <div className="align-items-center d-inline-flex">
          {icon}
          <div className="text">{text}</div>
        </div>
      </button>
    );
  }
}

export default MenuItem;
