/**
 * MyPageTemplate
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { UserForm } from "./organisms/UserForm";
/* hooks */
import { useGetMyUserQuery } from "@/hooks/useGraphQL";
/* styles */
import { useStyles } from "./style";

/**
 * MyPageTemplate
 * @returns
 */
export const MyPageTemplate: React.VFC = () => {
  /* styles */
  const classes = useStyles();
  /* graphql query */
  const getUserQuery = useGetMyUserQuery();
  return (
    <div className={classes.area}>
      <h2>MyPage</h2>
      {getUserQuery?.data?.me && <UserForm me={getUserQuery.data.me} />}
    </div>
  );
};
