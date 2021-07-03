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
/* contexts */
import { useAppState } from "@/contexts/AppContext";
/* components */
import { UnLoginNav } from "./organisms/UnLoginNav";
import { DoneLoginNav } from "./organisms/DoneLoginNav";
/* styles */
import { useStyles } from "./style";

/**
 * Header
 * @returns
 */
export const Header: React.VFC = () => {
  /* contexts */
  const { isLogin } = useAppState();
  /* styles */
  const classes = useStyles();

  const titleLink = isLogin ? "./home" : "./";

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bgColor}>
        <Toolbar>
          {/* タイトル */}
          <div className={classes.titleArea}>
            <div className={classes.titleClickArea}>
              <Link href={titleLink}>
                <Typography variant="h6" className={classes.title}>
                  Todoリスト
                </Typography>
              </Link>
            </div>
          </div>
          {/* ナビゲーション */}
          {isLogin ? <DoneLoginNav /> : <UnLoginNav />}
        </Toolbar>
      </AppBar>
    </div>
  );
};
