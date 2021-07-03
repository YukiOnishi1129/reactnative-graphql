/**
 * useAuthenticate
 * @package hooks
 * @copyright Yuki Onishi
 */
import React from "react";
import { NextRouter } from "next/router";
/* contexts */
import { useAppDispatch, login } from "@/contexts/AppContext";
/* hooks */
import { useAuthenticationMutation } from "@/hooks/useGraphQL";
/* logics */
import { isStayDoneAuthPageFunc } from "@/logic/AuthLogic";
/* constants */
import { NAVIGATION_LINK } from "@/constants/navigation";

/**
 * useAuthenticate
 */
export const useAuthenticate = () => {
  /* contexts */
  const dispatch = useAppDispatch();
  /* graphql mutation */
  const [authenticationMutation] = useAuthenticationMutation();

  /**
   * isCheckedAuthenticate
   */
  const isCheckedAuthenticate = React.useCallback(
    async (router: NextRouter) => {
      const token = localStorage.getItem("authorization");
      // ログイン後の画面にいるか？
      const isStayDoneAuthPage = isStayDoneAuthPageFunc(router.pathname);
      // tokenがなく、ログイン済みの画面に滞在している場合、ログイン画面にリダイレクト
      if (!token && isStayDoneAuthPage)
        router.push({
          pathname: NAVIGATION_LINK.SIGN_IN,
        });

      // tokenがなく、未ログインの画面に滞在している場合、処理を終了
      if (!token) return;

      // 認証確認処理
      const result = await authenticationMutation({
        variables: {
          authInput: {
            token: token,
          },
        },
      });

      // 未ログインの画面に滞在している場合の処理 (認証データなしの場合)
      if (!result?.data && !isStayDoneAuthPage) return;

      // 未ログインの画面に滞在している場合の処理 (認証データありの場合)
      if (result?.data && !isStayDoneAuthPage) {
        // globalStateを更新
        dispatch(
          login(
            result.data.authentication.user.id,
            result.data.authentication.token
          )
        );
        // Home画面(認証済みの画面)へリダイレクト
        router.push({
          pathname: NAVIGATION_LINK.HOME,
        });
      }
      // ログイン済の画面に滞在している場合の処理 (認証データなしの場合)
      // ログイン画面にリダイレクト
      if (!result?.data && isStayDoneAuthPage)
        router.push({
          pathname: NAVIGATION_LINK.SIGN_IN,
        });

      // ログイン済の画面に滞在している場合の処理 (認証データありの場合)
      if (result?.data && isStayDoneAuthPage) {
        // globalStateを更新
        dispatch(
          login(
            result.data.authentication.user.id,
            result.data.authentication.token
          )
        );
      }
    },
    [authenticationMutation, dispatch]
  );

  return {
    isCheckedAuthenticate,
  };
};