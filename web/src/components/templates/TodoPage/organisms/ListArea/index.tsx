/**
 * ListArea
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import { useRouter } from "next/router";
/* components */
import { Todo } from "@/components/common/molecules/Todo";
import { Pagination } from "@/components/common/molecules/Pagination";
/* constants */
import { TODO_SHOW_COUNT } from "@/constants/config";
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
  /* router */
  const { query } = useRouter();
  /* props */
  const { allTodo } = props;
  /* styles */
  const classes = useStyles();

  let startNum = 0;
  let endNum = 5;

  if (query?.page && typeof query.page === "string") {
    const currentPage = Number(query.page);
    if (currentPage !== 1) {
      startNum = TODO_SHOW_COUNT * (currentPage - 1);
      endNum = startNum + TODO_SHOW_COUNT - 1;
    }
  }

  const [todoList, setTodoList] = React.useState<Query["allTodo"]>(
    allTodo.slice(startNum, endNum)
  );

  React.useEffect(() => {
    setTodoList(allTodo.slice(startNum, endNum));
  }, [allTodo, startNum, endNum]);

  return (
    <div>
      <div className={classes.container}>
        {todoList.map((todo) => {
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
