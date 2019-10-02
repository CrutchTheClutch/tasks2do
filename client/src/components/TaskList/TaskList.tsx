import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import moment from 'moment';
import { ApolloError } from 'apollo-boost';
import { TASKS_QUERY } from '../../graphql/queries';
import Task from '../Task';
import './TaskList.scss';

class TaskList extends Component {
  public static convertDate(dueDate: string): string {
    const milli = parseInt(dueDate, 10);
    const formattedDate = moment(milli).format('MMM DD, YYYY');
    return formattedDate;
  }

  public render(): JSX.Element {
    return (
      <div className="taskList col-12 d-table">
        <Query query={TASKS_QUERY}>
          {({
            loading,
            error,
            data,
          }: {
            loading: boolean;
            error?: ApolloError;
            data: any;
          }): JSX.Element => {
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
        </Query>
      </div>
    );
  }
}

export default TaskList;
