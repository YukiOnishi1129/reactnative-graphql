/**
 * navigation
 * @package constants
 * @copyright Yuki Onishi
 */

/**
 * ナビゲーションの遷移先
 */
export const NAVIGATION_LINK = {
  TOP: "/",
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
  HOME: "/home",
  TODO_DETAIL: "/todo-detail",
  MY_PAGE: "/mypage",
};

/**
 * ログイン前の画面URLの配列
 */
export const UN_AUTH_NAVIGATION_LINK_ARRAY = [
  NAVIGATION_LINK.TOP,
  NAVIGATION_LINK.SIGN_IN,
  NAVIGATION_LINK.SIGN_UP,
];
