/**
 * TodoList
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
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
    <div>
      {getAllTodoQuery?.loading && <p>Loading...</p>}
      {getAllTodoQuery?.error && <p>エラー</p>}
      {getAllTodoQuery?.data?.allTodo &&
        getAllTodoQuery.data.allTodo.length !== 0 && (
          <div>
            {getAllTodoQuery.data.allTodo.map((todo) => {
              return (
                <div key={todo.id}>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                </div>
              );
            })}
          </div>
        )}
    </div>
  );
};
