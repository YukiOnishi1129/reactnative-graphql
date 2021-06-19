/**
 * リゾルバ TodoResolvers
 * @package graphql
 */
import { ApolloError } from "apollo-server-errors";
import { IResolvers } from "graphql-tools";
/* graphql */
import { TodoResponse, Todo as TodoGraphQLType } from "../types";
/* service */
import {
  getTodo,
  getTodoList,
  createTodo,
  updateTodo,
  doneTodo,
  activeTodo,
  deleteTodo,
} from "@Services/Todo";
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
    /**
     * todo
     * @param parent
     * @param args
     * @param param2
     * @returns
     */
    async todo(
      parent,
      args,
      { currentUser }: ResolverContextType
    ): Promise<TodoGraphQLType> {
      // 認証エラーチェック
      if (!currentUser) throw new ApolloError("認証エラーです。", "401");
      if (!args?.input?.id)
        throw new ApolloError("リクエストパラメータエラーです。", "400");

      const todo = await getTodo(args.input.id, currentUser.id);
      if (!todo)
        throw new ApolloError("リクエストパラメータエラーです。", "400");

      return {
        id: todo.id,
        title: todo.title,
        content: todo.content,
        doneFlg: todo.doneFlg,
        userId: todo.userId,
        createdAt: todo.createdAt,
      };
    },

    /**
     * allTodo
     * @param parent
     * @param args
     * @param param2
     * @returns
     */
    async allTodo(
      parent,
      args,
      { currentUser }: ResolverContextType
    ): Promise<TodoGraphQLType[]> {
      // 認証エラーチェック
      if (!currentUser) throw new ApolloError("認証エラーです。", "401");

      const data = await getTodoList(currentUser.id);

      if (!data || data.length === 0) return [];

      const todoList: TodoGraphQLType[] = data.map((todo) => {
        return {
          id: todo.id,
          title: todo.title,
          content: todo.content,
          doneFlg: todo.doneFlg,
          userId: todo.userId,
          createdAt: todo.createdAt,
        };
      });

      return todoList;
    },
  },

  /**
   * Mutation
   */
  Mutation: {
    async createTodo(
      parent,
      args,
      { currentUser, pubsub }: ResolverContextType
    ): Promise<TodoResponse> {
      // 認証エラーチェック
      if (!currentUser) throw new ApolloError("認証エラーです。", "401");

      if (
        !args?.input?.title ||
        (!args?.input?.content && args?.input?.content !== "")
      )
        throw new ApolloError("リクエストパラメータエラーです。", "400");

      const todo = await createTodo(
        args.input.title,
        args.input.content,
        currentUser.id
      );

      if (!todo)
        throw new ApolloError("リクエストパラメータエラーです。", "400");

      const newTodo: TodoGraphQLType = {
        id: todo.id,
        title: todo.title,
        content: todo.content,
        doneFlg: todo.doneFlg,
        userId: todo.userId,
        createdAt: todo.createdAt,
      };

      // サブスクリプション起動
      //   pubsub.publish("NEW_TODO", {
      //     newTodo: newTodo,
      //   });

      return {
        todo: newTodo,
      };
    },

    /**
     * updateTodo
     * @param parent
     * @param args
     * @param param2
     */
    async updateTodo(
      parent,
      args,
      { currentUser, pubsub }: ResolverContextType
    ) {
      // 認証エラーチェック
      if (!currentUser) throw new ApolloError("認証エラーです。", "401");

      if (
        !args?.input?.id ||
        !args?.input?.title ||
        (!args?.input?.content && args?.input?.content !== "")
      )
        throw new ApolloError("リクエストパラメータエラーです。", "400");

      const todo = await updateTodo(
        args.input.id,
        args.input.title,
        args.input.content
      );

      if (!todo)
        throw new ApolloError("リクエストパラメータエラーです。", "400");

      const updatedTodo: TodoGraphQLType = {
        id: todo.id,
        title: todo.title,
        content: todo.content,
        doneFlg: todo.doneFlg,
        userId: todo.userId,
        createdAt: todo.createdAt,
      };

      // サブスクリプション起動
      //   pubsub.publish("UPDATED_TODO", {
      //     updatedTodo: updatedTodo,
      //   });

      return {
        todo: updatedTodo,
      };
    },
    doneTodo(parent, args, { currentUser, pubsub }: ResolverContextType) {},
    activeTodo(parent, args, { currentUser, pubsub }: ResolverContextType) {},
    deleteTodo(parent, args, { currentUser, pubsub }: ResolverContextType) {},
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
