/**
 * ResolverType
 * @package types
 */
import { PubSub } from "apollo-server-express";
/* graphql */
import { User as UserGraphQLType } from "@GraphQL/types";

/**
 * ResolverContextType
 */
export interface ResolverContextType {
  currentUser: UserGraphQLType;
  pubsub: PubSub;
}
