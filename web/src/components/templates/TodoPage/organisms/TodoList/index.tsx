/**
 * TodoList
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { ListArea } from "@/components/templates/TodoPage/organisms/ListArea";
/* hooks */
import {
  useGetAllTodoQuery,
  useDoneTodoMutation,
  useActiveTodoMutation,
  useDeleteTodoMutation,
} from "@/hooks/useGraphQL";
/* types */
import { EventType } from "@/types/event";
/* styles */
import { useStyles } from "./style";

/**
 * TodoList
 * @returns
 */
export const TodoList: React.VFC = () => {
  /* styles */
  const classes = useStyles();
  /* graphql query */
  const getAllTodoQuery = useGetAllTodoQuery({
    fetchPolicy: "cache-and-network",
  });
  /* graphql mutation */
  const [doneTodoMutation] = useDoneTodoMutation();
  const [activeTodoMutation] = useActiveTodoMutation();
  const [deleteTodoMutation] = useDeleteTodoMutation();

  /**
   * Todo完了
   * @param targetId
   */
  const onDoneTodo = async (targetId: number) => {
    await doneTodoMutation({
      variables: {
        doneTodoInput: {
          id: targetId,
        },
      },
    });

    // Todoリスト再読み込み
    getAllTodoQuery.refetch();
  };

  /**
   * Todo未完了
   * @param targetId
   */
  const onActiveTodo = async (targetId: number) => {
    await activeTodoMutation({
      variables: {
        activeTodoInput: {
          id: targetId,
        },
      },
    });

    // Todoリスト再読み込み
    getAllTodoQuery.refetch();
  };

  /**
   * onActionTodo
   * @param targetId
   * @param doneFlg
   */
  const onActionTodo = async (targetId: number, doneFlg: boolean) => {
    if (!doneFlg) {
      await onDoneTodo(targetId);
    } else {
      await onActiveTodo(targetId);
    }
  };

  /**
   * Todo削除処理
   * @param {number} targetId
   */
  const onDeleteTodo = async (targetId: number) => {
    await deleteTodoMutation({
      variables: {
        deleteTodoInput: {
          id: targetId,
        },
      },
    });
    // Todoリスト再読み込み
    getAllTodoQuery.refetch();
  };

  return (
    <div className={classes.container}>
      {getAllTodoQuery?.loading && <p>Loading...</p>}
      {getAllTodoQuery?.error && <p>エラー</p>}
      {getAllTodoQuery?.data?.allTodo &&
        getAllTodoQuery.data.allTodo.length !== 0 && (
          <ListArea
            allTodo={getAllTodoQuery.data.allTodo}
            onActionTodo={onActionTodo}
            onDeleteTodo={onDeleteTodo}
          />
        )}
    </div>
  );
};
