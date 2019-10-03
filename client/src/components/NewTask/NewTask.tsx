import React, { Component } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { Mutation } from 'react-apollo';
import { CREATE_TASK_MUTATION } from '../../graphql/mutations';

import './NewTask.scss';

interface Props {}

interface State {}

class NewTask extends Component<Props, State> {
  public static defaultProps = {};

  public constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render(): JSX.Element {
    const {} = this.props;
    const {} = this.state;

    return <div className="newTask">newTask</div>;
  }
}

export default NewTask;
