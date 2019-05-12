import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    email: String!
    username: String!
    name: String!
    tasks: [Task!]!
    createdAt: String!
    updatedAt: String!
  }

  type AuthData {
    userId: ID!
    token: String!
  }

  extend type Query {
    user(id: ID!): User
    users: [User!]!
    signIn(
      email: String!
      password: String!
    ): AuthData
  }

  extend type Mutation {
    signUp(
      email: String!
      username: String!
      name: String!
      password: String!
    ): User
    deleteUser(id: ID!): User
  }
`;
