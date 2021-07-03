/**
 * Header
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
/* styles */
import { useStyles } from "./style";

/**
 * Header
 * @returns
 */
export const Header: React.VFC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bgColor}>
        <Toolbar>
          <div className={classes.titleArea}>
            <Link href="/">
              <Typography variant="h6" className={classes.title}>
                Todoリスト
              </Typography>
            </Link>
          </div>

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
        </Toolbar>
      </AppBar>
    </div>
  );
};
