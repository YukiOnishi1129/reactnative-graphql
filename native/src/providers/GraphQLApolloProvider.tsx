/**
 * GraphQLApolloProvider
 * @package providers
 */
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, split, createHttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
/* contexts */
import { useAppState } from '@Context/AppContext';
/* storages */
import { getUserStorage } from '@Storage/Storage';
/* types */
import { Query } from '@Type/schemas';

/**
 * props
 */
type Props = {
  children: React.ReactNode;
};

/**
 * GraphQLApolloProvider
 * @param param0
 */
export const GraphQLApolloProvider: React.VFC<Props> = ({ children }: Props) => {
  /* storage */
  const repo = getUserStorage();
  /* contexts */
  const state = useAppState();

  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  const authLink = setContext(async (_, { headers }) => {
    const current = await repo.load();
    return {
      ...headers,
      authorization: current?.token ? current.token : '',
    };
  });

  // Http用のLink(Query, Mutation)
  const httpAuthLink = authLink.concat(httpLink);

  // WebSocket用のLink(Subscription)
  const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/graphql',
    options: {
      reconnect: true,
      connectionParams: async () => ({
        authorization: (await repo.load())?.token ? (await repo.load()).token : '',
      }),
    },
  });

  /**
   * split: 2つのApolloLinkのうち、1つを返す
   * 第1引数: trueまたはfalseを返す関数
   * 第2引数: 第1引数がtrueの場合のリンク
   * 第3引数: 第1引数がfalseの場合のリンク
   */
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpAuthLink,
  );

  /**
   * client instance
   */
  const client = new ApolloClient({
    link: splitLink,
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

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
