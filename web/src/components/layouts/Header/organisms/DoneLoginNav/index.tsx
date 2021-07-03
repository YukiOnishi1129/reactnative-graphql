/**
 * Header/organisms/DoneLoginNav
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
 * DoneLoginNav
 * @returns
 */
export const DoneLoginNav: React.VFC = () => {
  const classes = useStyles();

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
    </div>
  );
};
