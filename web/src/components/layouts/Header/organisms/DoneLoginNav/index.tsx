/**
 * Header/organisms/DoneLoginNav
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
/* hooks */
import { useAuthenticate } from "@/hooks/useAuthenticate";
/* constants */
import { NAVIGATION_LINK } from "@/constants/navigation";
/* types */
import { EventType } from "@/types/event";
/* styles */
import { useStyles } from "./style";

/**
 * DoneLoginNav
 * @returns
 */
export const DoneLoginNav: React.VFC = () => {
  /* hooks */
  const { signOut } = useAuthenticate();
  /* styles */
  const classes = useStyles();

  /**
   * ログアウト
   */
  const logout: EventType["onClickButton"] = (event) => {
    event.preventDefault();
    //ログアウト処理
    signOut();
  };

  return (
    <div className={classes.nav}>
      <Link href={NAVIGATION_LINK.HOME}>
        <Button color="inherit" className={classes.button}>
          Home
        </Button>
      </Link>
      <Link href={NAVIGATION_LINK.MY_PAGE}>
        <Button color="inherit" className={classes.button}>
          MyPage
        </Button>
      </Link>
      <Button color="inherit" className={classes.button} onClick={logout}>
        Logout
      </Button>
    </div>
  );
};
