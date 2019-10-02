import gql from 'graphql-tag';

export const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($name: String!, $dueDate: String) {
    createTask(name: $name, dueDate: $dueDate) {
      id
    }
  }
`;

export const DELETE_TASK_MUTATION = gql`
  mutation DeleteTaskMutation($id: ID!) {
    deleteTask(id: $id) {
      id
    }
  }
`;
