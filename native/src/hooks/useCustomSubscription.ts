/**
 * useCustomSubscription
 * @package hooks
 */
/* contexts */
import { useAppState } from '@Context/AppContext';
/* hooks */
import {
  useNewTodoSubscription,
  useNewAllTodoSubscription,
  useUpdatedTodoSubscription,
  useHaveDoneTodoSubscription,
  useHaveActiveTodoSubscription,
  useDeletedTodoSubscription,
  GetAllTodoDocument,
} from './useGraphQL';
/* types */
import { AllTodoCacheDataType } from '@Type/cache';

/**
 * useCustomSubscription
 * @returns
 */
/* eslint-disable */
export const useCustomSubscription = () => {
  /* eslint-enable */

  const state = useAppState();

  /**
   * Todo追加時のサブスクリプション
   */
  const getTodoSubscription = useNewTodoSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (
        !subscriptionData?.data?.newTodo ||
        state?.userId !== subscriptionData.data.newTodo.userId
      )
        return;

      // cacheかallTodoを取得
      const currentData = client.cache.readQuery<AllTodoCacheDataType>({
        query: GetAllTodoDocument,
      });
      if (!currentData) return;

      // ディープコピー
      const newTodoList = currentData.allTodo.map((todo) => {
        return todo;
      });
      // 新規登録したTodoを先頭に追加
      newTodoList.unshift(subscriptionData.data.newTodo);

      // cacheを更新
      client.cache.writeQuery({
        query: GetAllTodoDocument,
        data: {
          allTodo: newTodoList,
        },
      });
    },
  });

  /**
   * Todo編集時のサブスクリプション
   */
  const getUpdatedTodoSubscription = useUpdatedTodoSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (
        !subscriptionData?.data?.updatedTodo ||
        state?.userId !== subscriptionData.data.updatedTodo.userId
      )
        return;

      // cacheかallTodoを取得
      const currentData = client.cache.readQuery<AllTodoCacheDataType>({
        query: GetAllTodoDocument,
      });
      if (!currentData) return;

      const targetTodo = subscriptionData.data.updatedTodo;

      // Todo更新
      const newTodoList = currentData.allTodo.map((todo) => {
        if (todo.id === targetTodo.id) {
          return {
            ...todo,
            title: targetTodo.title,
            content: targetTodo.content,
          };
        }
        return todo;
      });

      // cacheを更新
      client.cache.writeQuery({
        query: GetAllTodoDocument,
        data: {
          allTodo: newTodoList,
        },
      });
    },
  });

  /**
   * Todo完了時のサブスクリプション
   */
  const getDoneTodoSubscription = useHaveDoneTodoSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (
        !subscriptionData?.data?.doneTodo ||
        state?.userId !== subscriptionData.data.doneTodo.userId
      )
        return;

      // cacheかallTodoを取得
      const currentData = client.cache.readQuery<AllTodoCacheDataType>({
        query: GetAllTodoDocument,
      });
      if (!currentData) return;

      const targetTodo = subscriptionData.data.doneTodo;

      // Todo更新
      const newTodoList = currentData.allTodo.map((todo) => {
        if (todo.id === targetTodo.id) {
          return {
            ...todo,
            doneFlg: targetTodo.doneFlg,
          };
        }
        return todo;
      });

      // cacheを更新
      client.cache.writeQuery({
        query: GetAllTodoDocument,
        data: {
          allTodo: newTodoList,
        },
      });
    },
  });

  /**
   * Todo未完了時のサブスクリプション
   */
  const getActiveTodoSubscription = useHaveActiveTodoSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (
        !subscriptionData?.data?.activeTodo ||
        state?.userId !== subscriptionData.data.activeTodo.userId
      )
        return;

      // cacheかallTodoを取得
      const currentData = client.cache.readQuery<AllTodoCacheDataType>({
        query: GetAllTodoDocument,
      });
      if (!currentData) return;

      const targetTodo = subscriptionData.data.activeTodo;

      // Todo更新
      const newTodoList = currentData.allTodo.map((todo) => {
        if (todo.id === targetTodo.id) {
          return {
            ...todo,
            doneFlg: targetTodo.doneFlg,
          };
        }
        return todo;
      });

      // cacheを更新
      client.cache.writeQuery({
        query: GetAllTodoDocument,
        data: {
          allTodo: newTodoList,
        },
      });
    },
  });

  /**
   * Todo削除時のサブスクリプション
   */
  const getDeleteTodoSubscription = useDeletedTodoSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (
        !subscriptionData?.data?.deletedTodo ||
        state?.userId !== subscriptionData.data.deletedTodo.userId
      )
        return;

      // cacheかallTodoを取得
      const currentData = client.cache.readQuery<AllTodoCacheDataType>({
        query: GetAllTodoDocument,
      });
      if (!currentData) return;

      const targetTodoId = subscriptionData.data.deletedTodo.id;

      // Todo削除
      const newTodoList = currentData.allTodo.filter((todo) => {
        return todo.id !== targetTodoId;
      });

      // cacheを更新
      client.cache.writeQuery({
        query: GetAllTodoDocument,
        data: {
          allTodo: newTodoList,
        },
      });
    },
  });

  /**
   * TodoListのサブスクリプション
   */
  const getAllTodoSubscription = useNewAllTodoSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (
        !subscriptionData?.data?.newAllTodo ||
        state?.userId !== subscriptionData.data.newAllTodo[0]?.userId
      )
        return;

      // cacheを更新
      client.cache.writeQuery({
        query: GetAllTodoDocument,
        data: {
          allTodo: subscriptionData.data.newAllTodo,
        },
      });
    },
  });

  return {
    getTodoSubscription,
    getUpdatedTodoSubscription,
    getDoneTodoSubscription,
    getActiveTodoSubscription,
    getDeleteTodoSubscription,
    getAllTodoSubscription,
  };
};
