/**
 * Todo
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
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
};

/**
 * Todo
 * @param {Props} props
 * @returns
 */
export const Todo: React.VFC<Props> = (props: Props) => {
  /* props */
  const { todo } = props;
  /* styles */
  const classes = useStyles();

  return (
    <div key={todo.id} className={classes.todo}>
      <h6 className={classes.title}>{todo.title}</h6>
      <div className={classes.iconArea}>
        <div className={classes.icon}>
          <EditIcon fontSize="large" />
        </div>
        <div className={classes.icon}>
          <DeleteIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};
