/**
 * BaseLayout
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import { useRouter } from "next/router";
/* components */
import { Header } from "@/components/layouts/Header";
/* contexts */
import { useAppDispatch, login } from "@/contexts/AppContext";
/* hooks */
import { useAuthenticationMutation } from "@/hooks/useGraphQL";
/* logics */
import { isStayDoneAuthPageFunc } from "@/logic/AuthLogic";
/* constants */
import { NAVIGATION_LINK } from "@/constants/navigation";

/**
 * props
 */
type Props = {
  children: React.ReactNode;
};

/**
 * BaseLayout
 * @param {Props} props
 * @returns
 */
export const BaseLayout: React.VFC<Props> = ({ children }: Props) => {
  /* contexts */
  const dispatch = useAppDispatch();
  /* router */
  const router = useRouter();
  /* graphql mutation */
  const [authenticationMutation] = useAuthenticationMutation();

  const auth = React.useCallback(async () => {
    const token = localStorage.getItem("authorization");
    // ログイン後の画面にいるか？
    const isStayDoneAuthPage = isStayDoneAuthPageFunc(router.pathname);

    // tokenがなく、ログイン済みの場合、ログイン画面にリダイレクト
    if (!token && isStayDoneAuthPage)
      router.push({
        pathname: NAVIGATION_LINK.SIGN_IN,
      });
    // tokenがなく、未ログインの場合、処理を終了
    if (!token) return;

    const result = await authenticationMutation({
      variables: {
        authInput: {
          token: token,
        },
      },
    });

    // 未ログイン時の処理
    if (!result?.data && !isStayDoneAuthPage) return;
    if (result?.data && !isStayDoneAuthPage) {
      // globalStateを更新
      dispatch(
        login(
          result.data.authentication.user.id,
          result.data.authentication.token
        )
      );
      // Home画面へリダイレクト
      router.push({
        pathname: NAVIGATION_LINK.HOME,
      });
    }
    // ログイン済の処理
    // データがなくログイン済の画面にいる場合、ログイン画面にリダイレクト
    if (!result?.data && isStayDoneAuthPage)
      router.push({
        pathname: NAVIGATION_LINK.SIGN_IN,
      });
    // データがありログイン済の画面にいる場合
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

  React.useEffect(() => {
    auth();
  }, []);

  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
