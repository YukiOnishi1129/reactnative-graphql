/**
 * TodoDetailTemplate
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
import { useRouter } from "next/router";
/* components */
import { DetailForm } from "./organisms/DetailForm";
/* hooks */
import { useGetTodoDetailQuery } from "@/hooks/useGraphQL";
/* styles */
import { useStyles } from "./style";

/**
 * TodoDetailTemplate
 * @returns
 */
export const TodoDetailTemplate: React.VFC = () => {
  /* router */
  const { query } = useRouter();
  /* styles */
  const classes = useStyles();

  let targetId = 0;
  if (query?.id && typeof query.id === "string") {
    targetId = Number(query.id);
  }

  /* graphql query */
  const getTodoQuery = useGetTodoDetailQuery({
    variables: {
      todoIdInput: {
        id: targetId,
      },
    },
  });

  return (
    <div className={classes.area}>
      <h2>Todo Detail</h2>
      {getTodoQuery?.data?.todo && <DetailForm todo={getTodoQuery.data.todo} />}
    </div>
  );
};
