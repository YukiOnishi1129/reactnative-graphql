/**
 * ListArea
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import { useRouter } from "next/router";
/* components */
import { ActiveTodo } from "@/components/common/molecules/ActiveTodo";
import { DoneTodo } from "@/components/common/molecules/DoneTodo";
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
  onActionTodo: (targetId: number, doneFlg: boolean) => Promise<void>;
  onDeleteTodo: (targetId: number) => Promise<void>;
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
  const { allTodo, onActionTodo, onDeleteTodo } = props;
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
          if (todo.doneFlg) {
            return (
              <div className={classes.list} key={todo.id}>
                <DoneTodo
                  todo={todo}
                  onActionTodo={onActionTodo}
                  onDeleteTodo={onDeleteTodo}
                />
              </div>
            );
          } else {
            return (
              <div className={classes.list} key={todo.id}>
                <ActiveTodo
                  todo={todo}
                  onActionTodo={onActionTodo}
                  onDeleteTodo={onDeleteTodo}
                />
              </div>
            );
          }
        })}
      </div>

      <div className={classes.pagination}>
        <Pagination totalCount={allTodo.length} />
      </div>
    </div>
  );
};
