/**
 * UserForm
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { InputForm } from "@/components/common/atoms/InputForm";
/* types */
import { Query } from "@/types/schemas";
/* styles */
import { useStyles } from "./style";

/**
 * props
 */
type Props = {
  me: Query["me"];
};

/**
 * UserForm
 * @param {Props} props
 * @returns
 */
export const UserForm: React.VFC<Props> = (props: Props) => {
  /* props */
  const { me } = props;
  /* styles */
  const classes = useStyles();

  return (
    <>
      <div className={classes.form}>
        <div className={classes.input}>
          <InputForm label="お名前" value={me.name} disabled={true} />
        </div>
        <div className={classes.input}>
          <InputForm label="Email" value={me.email} disabled={true} />
        </div>
      </div>
    </>
  );
};
