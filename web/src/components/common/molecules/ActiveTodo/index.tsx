/**
 * ActiveTodo
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import Link from "next/link";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
/* types */
import { Query } from "@/types/schemas";
import { EventType } from "@/types/event";
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
 * ActiveTodo
 * @param {Props} props
 * @returns
 */
export const ActiveTodo: React.VFC<Props> = (props: Props) => {
  /* props */
  const { todo, onActionTodo, onDeleteTodo } = props;
  /* styles */
  const classes = useStyles();
  /* local */
  const [checked, setChecked] = React.useState(todo.doneFlg);

  /**
   * Todo完了・未完了処理
   * @param {EventType["onChangeEvent"]} event
   */
  const handleCheckChange: EventType["onChangeEvent"] = (event) => {
    setChecked(event.target.checked);
    onActionTodo(todo.id, todo.doneFlg);
  };

  return (
    <div key={todo.id} className={classes.todo}>
      <Checkbox
        checked={checked}
        onChange={handleCheckChange}
        color="primary"
      />
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
