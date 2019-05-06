import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoMdCheckmarkCircle, IoIosRadioButtonOff } from 'react-icons/io';

import './Task.scss';
import CustomButton from '../CustomButton';

const propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  taskName: PropTypes.string.isRequired,
  dueDate: PropTypes.string, // Is there a date PropType? String for now
};

const defaultProps = {
  dueDate: null,
};

class Task extends Component {
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.state = {
      completed: this.props.completed,
    };
  }

  toggleCompleted() {
    const { completed } = this.state;
    this.setState({
      completed: !completed,
    });
    console.log(completed);
  }

  render() {
    const { taskName, dueDate } = this.props;
    const {completed } = this.state;

    return (
      <div className={`task row no-gutters align-items-center ${completed ? '' : 'tasks2do'}`}>
        <CustomButton
          className="completed" //col-auto
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
        <div className="dueDate col-auto">
          {dueDate}
        </div>
      </div>
    );
  }
}

Task.propTypes = propTypes;
Task.defaultProps = defaultProps;

export default Task;
