/**
 * AddTodo
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { InputForm } from "@/components/common/atoms/InputForm";
import { ActionButton } from "@/components/common/atoms/ActionButton";
/* hooks */
import { useGetAllTodoQuery, useCreateTodoMutation } from "@/hooks/useGraphQL";
/* logics */
import {
  RequiredValidation,
  MaxLengthValidation,
} from "@/logic/ValidationLogic";
/* types */
import { EventType } from "@/types/event";
/* styles */
import { useStyles } from "./style";

/**
 * AddTodo
 * @returns
 */
export const AddTodo: React.VFC = () => {
  /* styles */
  const classes = useStyles();
  /* graphql query */
  const getAllTodoQuery = useGetAllTodoQuery();
  /* graphql mutation */
  const [createTodoMutation] = useCreateTodoMutation();
  /* local */
  const [inputTitle, setInputTitle] = React.useState("");
  const [titleErrorMessage, setTitleErrorMessage] = React.useState("");
  const [inputContent, setInputContent] = React.useState("");
  const [contentErrorMessage, setContentErrorMessage] = React.useState("");

  const [errorMessage, setErrorMessage] = React.useState("");

  /**
   * Todoタイトル変更処理
   * @param {EventType["onChange"]} event
   */
  const onChangeInputTitle: EventType["onChange"] = (event) => {
    setInputTitle(event.target.value);
  };

  /**
   * Todo内容変更処理
   * @param {EventType["onChange"]} event
   */
  const onChangeInputContent: EventType["onChange"] = (event) => {
    setInputContent(event.target.value);
  };

  /**
   * Todo追加
   * @param {EventType["onClickButton"]} event
   * @returns
   */
  const onAddTodo: EventType["onClickButton"] = async (event) => {
    event.preventDefault();
    // エラーメッセージ初期化
    resetErrorMessage();
    // バリデーションチェック
    if (validation()) {
      setErrorMessage("入力値に誤りがあります。");
      return;
    }

    try {
      // Todo追加処理
      const result = await createTodoMutation({
        variables: {
          createTodoInput: {
            title: inputTitle,
            content: inputContent,
          },
        },
      });

      if (!result.data) return;

      // 初期化
      setInputTitle("");
      setInputContent("");
      // Todoリスト再読み込み
      getAllTodoQuery.refetch();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  /**
   * バリデーション
   * @returns
   */
  const validation = () => {
    let errMsgTitle = "";
    let errMsgContent = "";
    // 必須チェック
    errMsgTitle = RequiredValidation(inputTitle);
    errMsgContent = RequiredValidation(inputContent);

    // 最大文字数チェック
    if (!errMsgTitle) errMsgTitle = MaxLengthValidation(inputTitle, 10);
    if (!errMsgContent) errMsgContent = MaxLengthValidation(inputContent, 200);

    if (!!errMsgTitle || !!errMsgContent) {
      setTitleErrorMessage(errMsgTitle);
      setContentErrorMessage(errMsgContent);
      return true;
    }

    return false;
  };

  /**
   * エラーメッセージ初期化
   */
  const resetErrorMessage = () => {
    setTitleErrorMessage("");
    setContentErrorMessage("");
    setErrorMessage("");
  };

  return (
    <div className={classes.area}>
      <h2>Create Todo</h2>
      <div className={classes.form}>
        {!!errorMessage && <p className={classes.error}>{errorMessage}</p>}
        <div className={classes.input}>
          <InputForm
            label="タイトル"
            value={inputTitle}
            onChange={onChangeInputTitle}
            errorMessage={titleErrorMessage}
            errorFlg={!!titleErrorMessage}
          />
        </div>
        <div className={classes.input}>
          <InputForm
            label="内容"
            value={inputContent}
            onChange={onChangeInputContent}
            errorMessage={contentErrorMessage}
            errorFlg={!!contentErrorMessage}
          />
        </div>
      </div>
      <div className={classes.button}>
        <ActionButton label="追加" onClick={onAddTodo} />
      </div>
    </div>
  );
};
