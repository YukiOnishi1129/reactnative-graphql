/**
 * useApolloClient
 * @package hooks
 * @copyright Yuki Onishi
 */
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  split,
  createHttpLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
/* types */
import { Query } from "@/types/schemas";

/**
 * useApolloClient
 * @returns
 */
export const useApolloClient = () => {
  /**
   * createApolloClient
   */
  const createApolloClient = React.useCallback(() => {
    const token = localStorage.getItem("authorization");

    const httpLink = createHttpLink({
      uri: "http://localhost:4000/graphql",
    });

    const authLink = setContext(async (_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? token : "",
        },
      };
    });

    // Http用のLink(Query, Mutation)
    const httpAuthLink = authLink.concat(httpLink);

    // WebSocket用のLink(Subscription)
    const wsLink = new WebSocketLink({
      uri: "ws://localhost:4000/graphql",
      options: {
        reconnect: true,
        connectionParams: async () => ({
          authorization: token ? token : "",
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
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpAuthLink
    );

    return new ApolloClient({
      link: splitLink,
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              allTodo: {
                merge(existing = [], incoming: Query["allTodo"]) {
                  if (existing.length === 0 && incoming.length === 0) return [];

                  return incoming;
                },
              },
            },
          },
        },
      }),
    });
  }, []);

  return {
    createApolloClient,
  };
};
