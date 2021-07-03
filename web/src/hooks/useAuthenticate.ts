/**
 * useAuthenticate
 * @package hooks
 * @copyright Yuki Onishi
 */
import React from "react";
import { useRouter } from "next/router";
/* contexts */
import { useAppDispatch, login, logout } from "@/contexts/AppContext";
/* hooks */
import {
  useSignInMutation,
  useSignUpMutation,
  useAuthenticationMutation,
} from "@/hooks/useGraphQL";
/* logics */
import { isStayDoneAuthPageFunc } from "@/logic/AuthLogic";
/* constants */
import { NAVIGATION_LINK } from "@/constants/navigation";

/**
 * useAuthenticate
 */
export const useAuthenticate = () => {
  const router = useRouter();
  /* contexts */
  const dispatch = useAppDispatch();
  /* graphql mutation */
  const [sigInInMutation] = useSignInMutation();
  const [sigInUpMutation] = useSignUpMutation();
  const [authenticationMutation] = useAuthenticationMutation();

  /**
   * signIn
   */
  const signIn = React.useCallback(
    // ログイン処理
    async (email: string, password: string): Promise<string | undefined> => {
      try {
        const result = await sigInInMutation({
          variables: {
            loginInput: {
              email: email,
              password: password,
            },
          },
        });

        if (!result?.data) return;
        // localStorageにtokenを保存
        localStorage.setItem("authorization", result.data.login.token);
        // globalStateを更新
        dispatch(login(result.data.login.user.id, result.data.login.token));
        // Home画面(認証済みの画面)へリダイレクト
        router.push({
          pathname: NAVIGATION_LINK.HOME,
        });
      } catch (error) {
        return error.message;
      }
    },
    [dispatch, router, sigInInMutation]
  );

  /**
   * signUp
   */
  const signUp = React.useCallback(
    async (name: string, email: string, password: string) => {
      try {
        const result = await sigInUpMutation({
          variables: {
            registerInput: {
              name: name,
              email: email,
              password: password,
            },
          },
        });
        if (!result?.data) return;
        // localStorageにtokenを保存
        localStorage.setItem("authorization", result.data.register.token);
        // globalStateを更新
        dispatch(
          login(result.data.register.user.id, result.data.register.token)
        );
        // Home画面(認証済みの画面)へリダイレクト
        router.push({
          pathname: NAVIGATION_LINK.HOME,
        });
      } catch (error) {
        return error.message;
      }
    },
    [router, dispatch, sigInUpMutation]
  );

  /**
   * signOut
   */
  const signOut = React.useCallback(() => {
    // ログアウト処理
    localStorage.removeItem("authorization");
    dispatch(logout());
    // ログイン画面(認証済みの画面)へリダイレクト
    router.push({
      pathname: NAVIGATION_LINK.SIGN_IN,
    });
  }, [router, dispatch]);

  /**
   * isCheckedAuthenticate
   */
  const isCheckedAuthenticate = React.useCallback(async () => {
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
  }, [authenticationMutation, router, dispatch]);

  return {
    signIn,
    signUp,
    signOut,
    isCheckedAuthenticate,
  };
};
