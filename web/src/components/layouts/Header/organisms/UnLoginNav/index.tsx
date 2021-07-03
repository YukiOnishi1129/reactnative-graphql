/**
 * Header/organisms/UnLoginNav
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
/* constants */
import { NAVIGATION_LINK } from "@/constants/navigation";
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
      <Link href={NAVIGATION_LINK.SIGN_IN}>
        <Button color="inherit" className={classes.button}>
          SignIn
        </Button>
      </Link>
      <Link href={NAVIGATION_LINK.SIGN_UP}>
        <Button color="inherit" className={classes.button}>
          SignUp
        </Button>
      </Link>
    </div>
  );
};
