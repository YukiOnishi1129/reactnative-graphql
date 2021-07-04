/**
 * ListArea
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { ActiveTodo } from "@/components/common/molecules/ActiveTodo";
import { DoneTodo } from "@/components/common/molecules/DoneTodo";
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
  onActionTodo: (targetId: number, doneFlg: boolean) => Promise<void>;
  onDeleteTodo: (targetId: number) => Promise<void>;
};

/**
 * ListArea
 * @param {Props} props
 * @returns
 */
export const ListArea: React.VFC<Props> = (props: Props) => {
  /* props */
  const { allTodo, onActionTodo, onDeleteTodo } = props;
  /* styles */
  const classes = useStyles();

  const [todoList, setTodoList] = React.useState<Query["allTodo"]>(
    allTodo.slice(0, 5)
  );

  React.useEffect(() => {
    setTodoList(allTodo.slice(0, 5));
  }, [allTodo]);

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
