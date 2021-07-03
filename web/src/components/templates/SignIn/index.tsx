/**
 * SignInTemplate
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { InputForm } from "@/components/common/atoms/InputForm";
import { ActionButton } from "@/components/common/atoms/ActionButton";
/* hooks */
import { useAuthenticate } from "@/hooks/useAuthenticate";
/* logics */
import {
  RequiredValidation,
  MaxLengthValidation,
  EmailValidation,
} from "@/logic/ValidationLogic";
/* types */
import { EventType } from "@/types/event";
/* styles */
import { useStyles } from "./style";

/**
 * SignInTemplate
 * @returns
 */
export const SignInTemplate: React.VFC = () => {
  /* hooks */
  const { signIn } = useAuthenticate();
  /* styles */
  const classes = useStyles();
  /* local */
  const [inputEmail, setInputEmail] = React.useState("");
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  const [errorMessage, setErrorMessage] = React.useState("");

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

  /**
   * ログイン処理
   * @param {EventType["onClickButton"]} event
   */
  const onSignIn: EventType["onClickButton"] = async (event) => {
    event.preventDefault();
    // エラーメッセージ初期化
    resetErrorMessage();
    // バリデーション
    if (validation()) {
      setErrorMessage("入力値に誤りがあります。");
      return;
    }

    const errorMessage = await signIn(inputEmail, inputPassword);

    if (!!errorMessage) setErrorMessage(errorMessage);

    // パスワード入力値を初期化
    setInputPassword("");
  };

  /**
   * バリデーション
   * @returns
   */
  const validation = () => {
    let errMsgEmail = "";
    let errMsgPassword = "";
    // 必須チェック
    errMsgEmail = RequiredValidation(inputEmail);
    errMsgPassword = RequiredValidation(inputPassword);

    // 最大文字数チェック
    if (!errMsgEmail) {
      errMsgEmail = MaxLengthValidation(inputEmail, 255);
    }

    // Email形式チェック
    if (!errMsgEmail) {
      errMsgEmail = EmailValidation(inputEmail);
    }

    if (!!errMsgEmail || !!errMsgPassword) {
      setEmailErrorMessage(errMsgEmail);
      setPasswordErrorMessage(errMsgPassword);
      return true;
    }

    return false;
  };

  /**
   * エラーメッセージ初期化
   */
  const resetErrorMessage = () => {
    setEmailErrorMessage("");
    setPasswordErrorMessage("");
    setErrorMessage("");
  };

  return (
    <div className={classes.area}>
      <h2>SignIn</h2>

      <div className={classes.form}>
        {!!errorMessage && <p className={classes.error}>{errorMessage}</p>}
        <div className={classes.input}>
          <InputForm
            label="Email"
            value={inputEmail}
            onChange={onChangeInputEmail}
            errorMessage={emailErrorMessage}
            errorFlg={!!emailErrorMessage}
          />
        </div>
        <div className={classes.input}>
          <InputForm
            label="Password"
            value={inputPassword}
            onChange={onChangeInputPassword}
            errorMessage={passwordErrorMessage}
            errorFlg={!!passwordErrorMessage}
          />
        </div>
      </div>
      <div className={classes.button}>
        <ActionButton label="ログイン" onClick={onSignIn} />
      </div>
    </div>
  );
};
