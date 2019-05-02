import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import {
  APP_PORT, DB_USER, DB_PASS, DB_HOST, DB_ARGS,
} from './config';

(async () => {
  try {
    mongoose.Promise = global.Promise;
    const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_ARGS}`;
    mongoose.connect(DB_URI, { useNewUrlParser: true });

    const app = express();

    app.disable('x-powered-by');

    console.log(process.env.NODE_ENV);

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: process.env.NODE_ENV !== 'production',
    });

    server.applyMiddleware({ app });

    app.listen({ port: APP_PORT }, () => (
      console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
    ));
  } catch (e) {
    console.log(e);
  }
})();
