/**
 * Footer
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
/* styles */
import { useStyles } from "./style";

/**
 * Footer
 * @returns
 */
export const Footer: React.VFC = () => {
  /* styles */
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.copyRight}>© 2021 TODO_LIST.</div>
    </div>
  );
};
