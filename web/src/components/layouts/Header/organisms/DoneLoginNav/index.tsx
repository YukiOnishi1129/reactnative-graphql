/**
 * Header/organisms/DoneLoginNav
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
/* styles */
import { useStyles } from "./style";

/**
 * DoneLoginNav
 * @returns
 */
export const DoneLoginNav: React.VFC = () => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <Link href="/home">
        <Button color="inherit" className={classes.button}>
          Home
        </Button>
      </Link>
      <Link href="/mypage">
        <Button color="inherit" className={classes.button}>
          MyPage
        </Button>
      </Link>
    </div>
  );
};
