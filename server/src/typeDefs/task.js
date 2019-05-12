import { gql } from 'apollo-server-express';

export default gql`
  type Task {
    id: ID!
    name: String!
    completed: Boolean!
    dueDate: String
    createdAt: String!
    updatedAt: String!
  }
  
  extend type Mutation {
    createTask(
      name: String!
      dueDate: String
    ): Task
    deleteTask(
      id: ID!
    ): Task
  }
`;
