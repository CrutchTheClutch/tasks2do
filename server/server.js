// #1 Import Express and Apollo Server
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

// #2 Import mongoose
require('./config/database');

const typeDefs = require('./modules/user/graphqlSchema').default;
const resolvers = require('./modules/user/resolvers').default;

// #5 Initialize an Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

// #6 Initialize an Express application
const app = express();

app.disable('x-powered-by');

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => (
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
));
