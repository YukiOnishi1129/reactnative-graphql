/**
 * SignUpTemplate
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
  ValueLengthValidation,
  AlphanumericValidation,
  MatchPasswordValidation,
  EmailValidation,
} from "@/logic/ValidationLogic";
/* types */
import { EventType } from "@/types/event";
/* styles */
import { useStyles } from "./style";

/**
 * SignUpTemplate
 * @returns
 */
export const SignUpTemplate: React.VFC = () => {
  /* hooks */
  const { signUp } = useAuthenticate();
  /* styles */
  const classes = useStyles();
  /* local */
  const [inputName, setInputName] = React.useState("");
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = React.useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    React.useState("");

  const [errorMessage, setErrorMessage] = React.useState("");

  /**
   * 入力name変更処理
   * @param {EventType["onChange"]} event
   */
  const onChangeInputName: EventType["onChange"] = (event) => {
    setInputName(event.target.value);
  };

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
   * 入力password(確認)変更処理
   * @param {EventType["onChange"]} event
   */
  const onChangeInputConfirmPassword: EventType["onChange"] = (event) => {
    setInputConfirmPassword(event.target.value);
  };

  /**
   * 会員登録処理
   * @param {EventType["onClickButton"]} event
   */
  const onSignUp: EventType["onClickButton"] = async (event) => {
    event.preventDefault();
    // エラーメッセージ初期化
    resetErrorMessage();
    // バリデーション
    if (validation()) {
      setErrorMessage("入力値に誤りがあります。");
      return;
    }
    const errorMessage = await signUp(inputName, inputEmail, inputPassword);

    if (!!errorMessage) setErrorMessage(errorMessage);

    // パスワード入力値を初期化
    setInputPassword("");
    setConfirmPasswordErrorMessage("");
  };

  /**
   * バリデーション
   * @returns
   */
  const validation = () => {
    let errMsgName = "";
    let errMsgEmail = "";
    let errMsgPassword = "";
    let errMsgConfirmPassword = "";
    // 必須チェック
    errMsgName = RequiredValidation(inputName);
    errMsgEmail = RequiredValidation(inputEmail);
    errMsgPassword = RequiredValidation(inputPassword);
    errMsgConfirmPassword = RequiredValidation(inputConfirmPassword);

    // 最大文字数チェック
    if (!errMsgName || !errMsgEmail) {
      errMsgName = MaxLengthValidation(inputName, 20);
      errMsgEmail = MaxLengthValidation(inputEmail, 255);
    }

    // Email形式チェック
    if (!errMsgEmail) {
      errMsgEmail = EmailValidation(inputEmail);
    }

    // 最小文字数チェック
    if (!errMsgPassword || !errMsgConfirmPassword) {
      errMsgPassword = ValueLengthValidation(inputPassword, 8, 20);
      errMsgConfirmPassword = ValueLengthValidation(
        inputConfirmPassword,
        8,
        20
      );
    }

    // 英数字チェック
    if (!errMsgPassword || !errMsgConfirmPassword) {
      errMsgPassword = AlphanumericValidation(inputPassword);
      errMsgConfirmPassword = AlphanumericValidation(inputConfirmPassword);
    }

    // パスワード一致チェック
    if (!errMsgPassword || !errMsgConfirmPassword) {
      errMsgPassword = MatchPasswordValidation(
        inputPassword,
        inputConfirmPassword
      );
    }

    if (
      !!errMsgName ||
      !!errMsgEmail ||
      !!errMsgPassword ||
      !!errMsgConfirmPassword
    ) {
      setNameErrorMessage(errMsgName);
      setEmailErrorMessage(errMsgEmail);
      setPasswordErrorMessage(errMsgPassword);
      setConfirmPasswordErrorMessage(errMsgConfirmPassword);
      return true;
    }

    return false;
  };

  /**
   * エラーメッセージ初期化
   */
  const resetErrorMessage = () => {
    setNameErrorMessage("");
    setEmailErrorMessage("");
    setPasswordErrorMessage("");
    setConfirmPasswordErrorMessage("");
    setErrorMessage("");
  };

  return (
    <div className={classes.area}>
      <h2>SignUp</h2>

      <div className={classes.form}>
        {!!errorMessage && <p className={classes.error}>{errorMessage}</p>}
        <div className={classes.input}>
          <InputForm
            label="お名前"
            value={inputName}
            onChange={onChangeInputName}
            errorMessage={nameErrorMessage}
            errorFlg={!!nameErrorMessage}
          />
        </div>
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
        <div className={classes.input}>
          <InputForm
            label="Password(確認)"
            value={inputConfirmPassword}
            onChange={onChangeInputConfirmPassword}
            placeholder="8文字以上20文字以内の英数字でご入力ください。"
            errorMessage={confirmPasswordErrorMessage}
            errorFlg={!!confirmPasswordErrorMessage}
          />
        </div>
      </div>
      <div className={classes.button}>
        <ActionButton label="会員登録" onClick={onSignUp} />
      </div>
    </div>
  );
};
