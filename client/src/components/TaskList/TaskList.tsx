import React, { Component } from 'react';
import { Query } from 'react-apollo';
import moment from 'moment';
import { ApolloError } from 'apollo-boost';
import { TASKS_QUERY } from '../../graphql/queries';
import Task from '../Task';
import './TaskList.scss';
import NewTask from '../NewTask';

interface Props {
  addTaskVisible: boolean;
  toggleAddTask: Function;
}

interface State {

}

class TaskList extends Component<Props, State> {
  public static defaultProps = {
    addTaskVisible: false,
  };

  public constructor(props: Props) {
    super(props);
    this.refetch = this.refetch.bind(this);
  }

  public static convertDate(dueDate: string): string {
    const milli = parseInt(dueDate, 10);
    const formattedDate = moment(milli).format('MMM DD, YYYY');
    return formattedDate;
  }

  public componentDidMount() {
    this.refetch;
  }

  public refetch = () => {
    this.refetch();
  }

  public render(): JSX.Element {
    const { addTaskVisible, toggleAddTask } = this.props;
    return (
      <div className="p-0 flex-grow-1">
        {addTaskVisible ? (
          <NewTask refetch={this.refetch} toggleAddTask={toggleAddTask} />
        ) : (
            <React.Fragment />
          )
        }
        <div className="taskList col-12 d-table">
          <Query query={TASKS_QUERY}>
            {({
              loading,
              error,
              data,
              refetch
            }: {
              loading: boolean;
              error?: ApolloError;
              data: any;
              refetch: Function;
            }): JSX.Element => {
              this.refetch = refetch();
              if (loading) return <h4>Loading...</h4>;
              if (error) return <h4>Error</h4>;

              return data.user.tasks.map(
                (task: {
                  id: string;
                  completed: boolean;
                  name: string;
                  dueDate: string;
                }): JSX.Element => (
                    <Task
                      key={task.id}
                      id={task.id}
                      completed={task.completed}
                      taskName={task.name}
                      dueDate={TaskList.convertDate(task.dueDate)}
                    />
                  ),
              );
            }}
          </Query >
        </div>
      </div>
    );
  }
}

export default TaskList;
