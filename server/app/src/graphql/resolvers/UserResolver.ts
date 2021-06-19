/**
 * リゾルバ UserResolvers
 * @package graphql
 */
import { ApolloError } from "apollo-server-errors";
import { IResolvers } from "graphql-tools";
/* graphql */
import { AuthenticateResponse, User as UserGraphQLType } from "../types";
/* service */
/* types */
import { ResolverContextType } from "@Types/Resolver";

/**
 * UserResolvers
 */
export const UserResolvers: IResolvers = {
  /**
   * Query
   */
  Query: {
    me(parent, args) {},
    allUsers(parent, args) {},
  },

  /**
   * Mutation
   */
  Mutation: {
    login(parent, args) {},
    register(parent, args) {},
  },
};
