/**
 * HomeTemplate
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import Box from "@material-ui/core/Box";
/* components */
import { AddTodo } from "./organisms/AddTodo";
import { TodoList } from "./organisms/TodoList";
/* hooks */
import {
  useCreateTodoMutation,
  useDoneTodoMutation,
  useActiveTodoMutation,
  useDeleteTodoMutation,
} from "@/hooks/useGraphQL";
/* types */
import { EventType } from "@/types/event";
/* styles */
import { useStyles } from "./style";

/**
 * HomeTemplate
 * @returns
 */
export const HomeTemplate: React.VFC = () => {
  /* styles */
  const classes = useStyles();

  return (
    <div className={classes.area}>
      <h2>TodoList</h2>
      <Box
        className={classes.main}
        display="flex"
        justifyContent="space-around"
      >
        <div className={classes.leftBar}>
          <AddTodo />
        </div>
        <div className={classes.rightBar}>
          <TodoList />
        </div>
      </Box>
    </div>
  );
};
