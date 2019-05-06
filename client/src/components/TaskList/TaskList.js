import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TaskList.scss';

import Task from '../Task';

const propTypes = {

};

const defaultProps = {

};

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.getTasks = this.getTasks.bind(this);
    this.state = {
      error: null,
      isLoading: true,
      tasks: [],
    };
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    // Get All Tasks from DB HERE

    // Returned "DB" Data (will add actual connection soon)
    const dummyDATA = [
      {
        taskID: 1,
        completed: false,
        taskName: 'Finish CMST 488',
        dueDate: 'May 12 2019',
      },
      {
        taskID: 2,
        completed: true,
        taskName: 'Start CMST 488 Final',
        dueDate: 'May 12 2019',
      },
    ];

    this.setState({
      isLoading: false,
      tasks: dummyDATA,
    });
  }

  render() {
    const { error, isLoading, tasks } = this.state;

    return (
      <div className="taskList col-12 d-table">
        {error
          ? (
            <div>
              {'error'}
            </div>
          )
          : (
            null
          )
        }
        {!isLoading ? (
          tasks.map((task) => {
            const {
              taskID,
              completed,
              taskName,
              dueDate,
            } = task;
            return (
              <Task
                id={taskID}
                key={taskID}
                completed={completed}
                taskName={taskName}
                dueDate={dueDate}
              />
            );
          })
        ) : (
          <div>
            {'loading...'}
          </div>
        )}
      </div>
    );
  }
}

TaskList.propTypes = propTypes;
TaskList.defaultProps = defaultProps;

export default TaskList;
