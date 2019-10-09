import React, { Component, useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import DatePicker from 'react-datepicker';
import { Mutation } from 'react-apollo';
import { CREATE_TASK_MUTATION } from '../../graphql/mutations';

import "react-datepicker/dist/react-datepicker.css";
import './NewTask.scss';
import CustomButton from '../CustomButton';

interface Props {
  refetch: Function;
  toggleAddTask: Function;
}

interface State {
  visible: boolean;
  name: string;
  dueDate?: Date;
}

class NewTask extends Component<Props, State> {
  public static defaultProps = {};

  public constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.toggleAddTask = this.toggleAddTask.bind(this);
    this.taskCreated = this.taskCreated.bind(this);
    this.state = {
      name: '',
      visible: false,
      dueDate: new Date(),
    };
  }

  public toggleAddTask(): void {
    const { toggleAddTask } = this.props;
    toggleAddTask();
  }

  public handleChange(event: any) {
    this.setState({
      name: event.target.value
    });
  }

  public handleDateChange(date: Date) {
    this.setState({
      dueDate: date
    });
  };

  public taskCreated(): void {
    const { refetch, toggleAddTask } = this.props;
    refetch;
    toggleAddTask();
  }

  public render(): JSX.Element {
    const { name, dueDate } = this.state;

    return (
      <div className="newTask bg">
        <div className="newTask modal-bg">
          <Mutation
            mutation={CREATE_TASK_MUTATION}
            variables={{ name, dueDate }}
            onCompleted={this.taskCreated}
          >
            {(createTaskMutation: Function): JSX.Element | null => (
              <React.Fragment>
                <label className="newTask addTaskLabel">Task Name</label>
                <input
                  className="newTask addTaskInput"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <label className="newTask datePickerLabel">Due Date</label>
                <div className="newTask datePickerInput">
                  <DatePicker
                    selected={dueDate}
                    onChange={this.handleDateChange} //only when value has changed
                  />
                </div>
                <CustomButton
                  className="newTask addTaskBtn"
                  content={<strong>Add Task</strong>}
                  onClick={createTaskMutation}
                />
              </React.Fragment>
            )}
          </Mutation>
        </div>
      </div>
    );
  }
}

export default NewTask;
