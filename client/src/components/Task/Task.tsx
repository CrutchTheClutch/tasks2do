import React, { Component } from 'react';
import {
  IoMdCheckmarkCircle,
  IoIosRadioButtonOff,
  IoMdCloseCircle,
} from 'react-icons/io';
import { Mutation } from 'react-apollo';
import {
  DELETE_TASK_MUTATION,
  TOGGLE_TASK_COMPLETED_MUTATION,
} from '../../graphql/mutations';
import moment from 'moment';
import CustomButton from '../CustomButton';
import './Task.scss';

interface Props {
  id: string;
  completed: boolean;
  taskName: string;
  dueDate: string;
}

interface State {
  completed: boolean;
  hover: boolean;
  del: boolean;
  overdue: boolean;
}

class Task extends Component<Props, State> {
  public static defaultProps = {
    dueDate: null,
  };

  public constructor(props: Props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.enableHover = this.enableHover.bind(this);
    this.disableHover = this.disableHover.bind(this);
    this.del = this.del.bind(this);
    this.state = {
      completed: this.props.completed,
      hover: false,
      del: false,
      overdue: false,
    };
  }

  public toggleCompleted(): void {
    const { completed } = this.state;
    this.setState({
      completed: !completed,
    });
  }

  public enableHover(): void {
    this.setState({
      hover: true,
    });
  }

  public disableHover(): void {
    this.setState({
      hover: false,
    });
  }

  public del(): void {
    this.setState({
      del: true,
    });
  }

  public componentWillMount() {
    const { dueDate } = this.props;
    const myDate = new Date(dueDate);
    const today = new Date(moment().format("YYYY/MM/DD"));

    if (myDate < today) {
      this.setState({
        overdue: true,
      })
    }
  }

  public render(): JSX.Element {
    const { id, taskName, dueDate } = this.props;
    const { completed, del, hover, overdue } = this.state;

    return del ? (
      <React.Fragment />
    ) : (
        <div
          className={`task row no-gutters align-items-center ${
            completed ? '' : 'tasks2do'
            }`}
          onMouseEnter={this.enableHover}
          onMouseLeave={this.disableHover}
        >
          <Mutation
            mutation={TOGGLE_TASK_COMPLETED_MUTATION}
            variables={{ id, completed }}
            onCompleted={this.toggleCompleted}
          >
            {(toggleTaskCompleted: Function): JSX.Element => (
              <CustomButton
                className="completed"
                content={
                  completed ? (
                    <IoMdCheckmarkCircle className="icon text-brand-primary" />
                  ) : (
                      <IoIosRadioButtonOff className="icon" />
                    )
                }
                onClick={toggleTaskCompleted}
              />
            )}
          </Mutation>
          <div className="taskName col flex-grow-1">{taskName}</div>

          {!hover ? (
            <div className={`dueDate col-auto ${overdue ? 'overdue' : ''}`}>{dueDate}</div>
          ) : (
              <Mutation
                mutation={DELETE_TASK_MUTATION}
                variables={{ id }}
                onCompleted={this.del}
              >
                {(deleteTaskMutation: Function): JSX.Element => (
                  <CustomButton
                    className="completed"
                    content={<IoMdCloseCircle className="icon" />}
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
