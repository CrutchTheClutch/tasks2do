import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import App from './App';
import './index.scss';

const IN_PROD = process.env.NODE_ENV === 'production';
const URI = IN_PROD
  ? 'https://tasks2do-server.herokuapp.com/graphql'
  : 'https://localhost:4000';

const client = new ApolloClient({
  uri: URI,
});

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(WrappedApp, document.getElementById('root'));
