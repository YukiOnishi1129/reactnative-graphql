/**
 * リゾルバ TodoResolvers
 * @package graphql
 */
import { ApolloError } from "apollo-server-errors";
import { IResolvers } from "graphql-tools";
/* graphql */
import { AuthenticateResponse, Todo as TodoGraphQLType } from "../types";
/* service */
/* types */
import { ResolverContextType } from "@Types/Resolver";

/**
 * TodoResolvers
 */
export const TodoResolvers: IResolvers = {
  /**
   * Query
   */
  Query: {
    todo(parent, args) {},
    allTodo(parent, args) {},
  },

  /**
   * Mutation
   */
  Mutation: {
    createTodo(parent, args) {},
    updateTodo(parent, args) {},
    doneTodo(parent, args) {},
    activeTodo(parent, args) {},
    deleteTodo(parent, args) {},
  },

  Subscription: {
    newTodo: {
      subscribe: (parent, args, { pubsub }: ResolverContextType) => {
        return pubsub.asyncIterator("NEW_TODO");
      },
    },
    updatedTodo: {
      subscribe: (parent, args, { pubsub }: ResolverContextType) =>
        pubsub.asyncIterator("UPDATED_TODO"),
    },
    doneTodo: {
      subscribe: (parent, args, { pubsub }: ResolverContextType) =>
        pubsub.asyncIterator("DONE_TODO"),
    },
    activeTodo: {
      subscribe: (parent, args, { pubsub }: ResolverContextType) =>
        pubsub.asyncIterator("ACTIVE_TODO"),
    },
    deletedTodo: {
      subscribe: (parent, args, { pubsub }: ResolverContextType) =>
        pubsub.asyncIterator("DELETED_TODO"),
    },
    newAllTodo: {
      subscribe: (parent, args, { pubsub }: ResolverContextType) =>
        pubsub.asyncIterator("NEW_ALL_TODO"),
    },
  },
};
