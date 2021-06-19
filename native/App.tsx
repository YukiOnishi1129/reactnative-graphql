/**
 * App.tsx
 */
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, split, createHttpLink } from '@apollo/client';
/* routes */
import { AppNavigator } from '@Route/index';
/* types */
import { Query } from '@Type/schemas';

/**
 * App
 * @returns
 */
const App = (): JSX.Element => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allTodo: {
              merge(existing = [], incoming: Query['allTodo']) {
                if (existing.length === 0 && incoming.length === 0) return [];

                return incoming;
              },
            },
          },
        },
      },
    }),
  });

  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
};

export default App;
