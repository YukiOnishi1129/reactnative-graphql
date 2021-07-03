/**
 * SignInTemplate
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { InputForm } from "@/components/common/atoms/InputForm";
import { ActionButton } from "@/components/common/atoms/ActionButton";
/* types */
import { EventType } from "@/types/event";
/* styles */
import { useStyles } from "./style";

/**
 * SignInTemplate
 * @returns
 */
export const SignInTemplate: React.VFC = () => {
  /* styles */
  const classes = useStyles();
  /* local */
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");

  /**
   * 入力email変更処理
   * @param {EventType["onChange"]} event
   */
  const onChangeInputEmail: EventType["onChange"] = (event) => {
    setInputEmail(event.target.value);
  };

  /**
   * 入力password変更処理
   * @param {EventType["onChange"]} event
   */
  const onChangeInputPassword: EventType["onChange"] = (event) => {
    setInputPassword(event.target.value);
  };

  const onSignIn: EventType["onClickButton"] = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.area}>
      <h2>SignIn</h2>
      <div className={classes.form}>
        <div className={classes.input}>
          <InputForm
            label="Email"
            value={inputEmail}
            onChange={onChangeInputEmail}
            errorMessage=""
            errorFlg={false}
          />
        </div>
        <div className={classes.input}>
          <InputForm
            label="Password"
            value={inputPassword}
            onChange={onChangeInputPassword}
            errorMessage=""
            errorFlg={false}
          />
        </div>
      </div>
      <div className={classes.button}>
        <ActionButton label="ログイン" onClick={onSignIn} />
      </div>
    </div>
  );
};
