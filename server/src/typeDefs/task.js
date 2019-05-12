import { gql } from 'apollo-server-express';

export default gql`
  type Task {
    id: ID!
    name: String!
    completed: Boolean!
    dueDate: String
    assignedTo: User!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    task(id: ID!): Task
    tasks(assignedTo: ID!): [Task!]!
  }

  extend type Mutation {
    createTask(
      name: String!
      dueDate: String
    ): Task
  }
`;
