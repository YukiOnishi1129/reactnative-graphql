/**
 * ResolversMap
 * @package graphql
 */
import { IResolvers } from "graphql-tools";
import { merge } from "lodash";
/* resolvers */
import { UserResolvers } from "./resolvers/UserResolver";
import { TodoResolvers } from "./resolvers/TodoResolver";

// リゾルバを1つに結合
const resolversMap: IResolvers = merge(UserResolvers, TodoResolvers);
export default resolversMap;
