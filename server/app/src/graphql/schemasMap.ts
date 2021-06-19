/**
 * schema mapping
 */
import "graphql-import-node";
import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";
/* schemas */
import * as userTypeDefs from "./schemas/user.gql";
import * as todoTypeDefs from "./schemas/todo.gql";
import * as emptyTypeDefs from "./schemas/empty.gql";
/* resolvers */
import resolvers from "./resolversMap";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, userTypeDefs, todoTypeDefs],
  resolvers,
});

export default schema;
