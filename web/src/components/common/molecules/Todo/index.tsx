/**
 * Todo
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import Link from "next/link";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
/* types */
import { Query } from "@/types/schemas";
/* styles */
import { useStyles } from "./style";

/**
 * props
 */
type Props = {
  todo: Query["todo"];
  onActionTodo: (targetId: number, doneFlg: boolean) => Promise<void>;
  onDeleteTodo: (targetId: number) => Promise<void>;
};

/**
 * Todo
 * @param {Props} props
 * @returns
 */
export const Todo: React.VFC<Props> = (props: Props) => {
  /* props */
  const { todo, onActionTodo, onDeleteTodo } = props;
  /* styles */
  const classes = useStyles();

  return (
    <div key={todo.id} className={classes.todo}>
      <h6 className={classes.title}>{todo.title}</h6>
      <div className={classes.iconArea}>
        <div className={classes.icon}>
          <Link href={`/todo-detail/${todo.id}`}>
            <EditIcon fontSize="large" />
          </Link>
        </div>
        <div className={classes.icon} onClick={() => onDeleteTodo(todo.id)}>
          <DeleteIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};
