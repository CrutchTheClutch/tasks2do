import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoMdCheckmarkCircle, IoIosRadioButtonOff, IoMdCloseCircle } from 'react-icons/io';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import CustomButton from '../CustomButton';
import './Task.scss';

const DELETE_TASK_MUTATION = gql`
  mutation DeleteTaskMutation($id: ID!) {
    deleteTask(id: $id) {
      id
    }
  }
`;

interface Props {
  id: string;
  completed: boolean;
  taskName: string;
  dueDate?: string;
}

interface State {
  completed: boolean;
  hover: boolean;
}

class Task extends Component<Props, State> {
  static propTypes = {
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    taskName: PropTypes.string.isRequired,
    dueDate: PropTypes.string,
  };
  
  static defaultProps = {
    dueDate: null,
  };

  constructor(props: Props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.state = {
      completed: this.props.completed,
      hover: false,
    };
  }

  toggleCompleted() {
    const { completed } = this.state;
    this.setState({
      completed: !completed,
    });
  }

  toggleHover() {
    const { hover } = this.state;
    this.setState({
      hover: !hover,
    });
  }

  render() {
    const { id, taskName, dueDate } = this.props;
    const { completed, hover } = this.state;

    return (
      <div
        className={`task row no-gutters align-items-center ${completed ? '' : 'tasks2do'}`}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <CustomButton
          className="completed"
          content={completed ? (
            <IoMdCheckmarkCircle className="icon text-brand-primary" />
          ) : (
            <IoIosRadioButtonOff className="icon" />
          )}
          onClick={this.toggleCompleted}
        />
        <div className="taskName col flex-grow-1">
          {taskName}
        </div>

        {!hover ? (
          <div className="dueDate col-auto">
            {dueDate}
          </div>
        ) : (
          <Mutation mutation={DELETE_TASK_MUTATION} variables={{ id }}>
            {(deleteTaskMutation: Function) => (
              <CustomButton
                className="completed"
                content={
                  <IoMdCloseCircle className="icon" />
                }
                onClick={deleteTaskMutation}
              />
            )}
          </Mutation>
        )}
      </div>
    );
  }
}

export default Task;
