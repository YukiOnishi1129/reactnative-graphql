/**
 * DetailForm
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
import { useRouter } from "next/router";
/* components */
import { InputForm } from "@/components/common/atoms/InputForm";
import { ActionButton } from "@/components/common/atoms/ActionButton";
/* hooks */
import { useGetAllTodoQuery, useUpdateTodoMutation } from "@/hooks/useGraphQL";
/* logics */
import {
  RequiredValidation,
  MaxLengthValidation,
} from "@/logic/ValidationLogic";
/* constants */
import { NAVIGATION_LINK } from "@/constants/navigation";
/* types */
import { EventType } from "@/types/event";
import { Query } from "@/types/schemas";
/* styles */
import { useStyles } from "./style";

/**
 * props
 */
type Props = {
  todo: Query["todo"];
};

/**
 * DetailForm
 * @param {Props} props
 * @returns
 */
export const DetailForm: React.VFC<Props> = (props: Props) => {
  /* router */
  const router = useRouter();
  /* props */
  const { todo } = props;
  /* styles */
  const classes = useStyles();
  /* graphql query */
  const getAllTodoQuery = useGetAllTodoQuery();
  /* graphql mutation */
  const [updateTodoMutation] = useUpdateTodoMutation();
  /* local */
  const [inputTitle, setInputTitle] = React.useState(todo.title);
  const [titleErrorMessage, setTitleErrorMessage] = React.useState("");
  const [inputContent, setInputContent] = React.useState(todo.content);
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
   * Todo更新処理
   * @param {EventType["onClickButton"]} event
   * @returns
   */
  const onUpdate: EventType["onClickButton"] = async (event) => {
    event.preventDefault();
    // エラーメッセージ初期化
    resetErrorMessage();
    // バリデーションチェック
    if (validation()) {
      setErrorMessage("入力値に誤りがあります。");
      return;
    }

    // Todo更新処理
    try {
      const result = await updateTodoMutation({
        variables: {
          updateTodoInput: {
            id: todo.id,
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
      // Home画面へリダイレクト
      router.push({
        pathname: NAVIGATION_LINK.HOME,
      });
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
    <>
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
        <ActionButton label="更新" onClick={onUpdate} />
      </div>
    </>
  );
};
