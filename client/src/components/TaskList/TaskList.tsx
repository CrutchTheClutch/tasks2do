import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query, QueryResult } from 'react-apollo';
import moment from 'moment';

import Task from '../Task';
import './TaskList.scss';
import { ApolloError } from 'apollo-boost';

const TASKS_QUERY = gql`
  query TasksQuery {
    user(id:"5cd7f0d68ec310afd9a2f7a5") {
      id
      tasks {
        id
        name
        completed
        dueDate
      }
    }
  }
`;

class TaskList extends Component {
  // eslint-disable-next-line class-methods-use-this
  convertDate(dueDate: string) {
    const milli = parseInt(dueDate);
    const formattedDate = moment(milli).format('MMM DD, YYYY');
    return formattedDate;
  }

  render() {
    return (
      <div className="taskList col-12 d-table">
        <Query query={TASKS_QUERY}>
          {({ loading, error, data }: { loading: boolean; error?: ApolloError; data: any; }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) return <h4>Error</h4>;

            return (
              data.user.tasks.map((task: { id: string; completed: boolean; name: string; dueDate: string; }) => (
                <Task
                  key={task.id}
                  id={task.id}
                  completed={task.completed}
                  taskName={task.name}
                  dueDate={this.convertDate(task.dueDate)}
                />
              ))
            );
          }}
        </Query>
      </div>
    );
  }
}

export default TaskList;
