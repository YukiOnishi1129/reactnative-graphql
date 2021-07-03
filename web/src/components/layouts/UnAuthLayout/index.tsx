/**
 * UnAuthLayout
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
/* components */
import { Header } from "@/components/layouts/Header";

/**
 * props
 */
type Props = {
  children: React.ReactNode;
};

/**
 * UnAuthLayout
 * @param {Props} props
 * @returns
 */
export const UnAuthLayout: React.VFC<Props> = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
