/**
 * Header/organisms/UnLoginNav
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
/* styles */
import { useStyles } from "./style";

/**
 * UnLoginNav
 * @returns
 */
export const UnLoginNav: React.VFC = () => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <Link href="/signin">
        <Button color="inherit" className={classes.button}>
          SignIn
        </Button>
      </Link>
      <Link href="/signup">
        <Button color="inherit" className={classes.button}>
          SignUp
        </Button>
      </Link>
    </div>
  );
};
