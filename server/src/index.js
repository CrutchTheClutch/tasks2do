import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { APP_PORT, DB_USER, DB_PASS, DB_HOST, DB_ARGS, IN_PROD } from './config';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { isAuth } from './middleware';

(async () => {
  try {
    mongoose.Promise = global.Promise;
    
    const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_ARGS}`;
    mongoose.connect(DB_URI, { useNewUrlParser: true });

    mongoose.set('useFindAndModify', false);

    const app = express();

    app.disable('x-powered-by');
    app.use(cors());
    app.use(isAuth);

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: !IN_PROD,
      context: ({ req }) => ({
        isAuth: req.isAuth,
        userId: req.userId,
      })
    });

    server.applyMiddleware({ app });

    app.listen({ port: APP_PORT }, () => (
      console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
    ));
  } catch (e) {
    console.log(e);
  }
})();
