import gql from 'graphql-tag';

export const CREATE_TASK_MUTATION = gql`
  mutation CreateDummyTaskMutation($name: String!, $dueDate: String) {
    createTask(name: $name, dueDate: $dueDate) {
      id
    }
  }
`;
