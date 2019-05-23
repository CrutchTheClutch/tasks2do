import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import App from './App';
import './index.scss';

const client = new ApolloClient({
  uri: 'https://tasks2do-server.herokuapp.com/graphql',
  // uri: 'http://localhost:4000/graphql',
});

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(WrappedApp, document.getElementById('root'));
