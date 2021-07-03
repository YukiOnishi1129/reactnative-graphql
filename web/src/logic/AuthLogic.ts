/**
 * AuthLogic
 * @package logics
 * @copyright Yuki Onishi
 */
/* constants */
import { UN_AUTH_NAVIGATION_LINK_ARRAY } from "@/constants/navigation";

/**
 * ログイン済の画面にいるかを確認
 * @param {string} routerParam
 * @returns
 */
export const isStayDoneAuthPageFunc = (routerParam: string) => {
  return UN_AUTH_NAVIGATION_LINK_ARRAY.indexOf("." + routerParam) === -1;
};
