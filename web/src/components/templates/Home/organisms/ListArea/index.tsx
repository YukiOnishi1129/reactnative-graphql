/**
 * ListArea
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { Todo } from "@/components/common/molecules/Todo";
import { Pagination } from "@/components/common/molecules/Pagination";
/* types */
import { Query } from "@/types/schemas";
/* styles */
import { useStyles } from "./style";

/**
 * props
 */
type Props = {
  allTodo: Query["allTodo"];
};

/**
 * ListArea
 * @param {Props} props
 * @returns
 */
export const ListArea: React.VFC<Props> = (props: Props) => {
  /* props */
  const { allTodo } = props;
  /* styles */
  const classes = useStyles();

  const showTodoList = allTodo.slice(0, 5);

  return (
    <div>
      <div>
        {showTodoList.map((todo) => {
          return (
            <div className={classes.list} key={todo.id}>
              <Todo todo={todo} />
            </div>
          );
        })}
      </div>
      <div className={classes.pagination}>
        <Pagination totalCount={allTodo.length} />
      </div>
    </div>
  );
};
