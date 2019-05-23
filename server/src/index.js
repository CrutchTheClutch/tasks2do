import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path'

import { APP_PORT, DB_USER, DB_PASS, DB_HOST, DB_ARGS } from './config';
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

    const IN_PROD = process.env.NODE_ENV === 'production';
    const ORIGIN = (IN_PROD ? "https://tasks2do-client.herokuapp.com" : "https://localhost:3000");

    app.disable('x-powered-by');
    app.use(cors({
      origin: ORIGIN
    }));
    app.use(isAuth);

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: true, // !IN_PROD,
      context: ({ req }) => ({
        isAuth: req.isAuth,
        userId: req.userId,
      })
    });

    server.applyMiddleware({ app });

    app.use(express.static('public'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });

    app.listen({ port: process.env.PORT || 4000 }, () => (
      console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
    ));
  } catch (e) {
    console.log(e);
  }
})();
