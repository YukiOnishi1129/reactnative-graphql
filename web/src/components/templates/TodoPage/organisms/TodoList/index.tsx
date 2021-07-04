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

  return (
    <div className={classes.container}>
      {getAllTodoQuery?.loading && <p>Loading...</p>}
      {getAllTodoQuery?.error && <p>エラー</p>}
      {getAllTodoQuery?.data?.allTodo &&
        getAllTodoQuery.data.allTodo.length !== 0 && (
          <ListArea allTodo={getAllTodoQuery.data.allTodo} />
        )}
    </div>
  );
};
