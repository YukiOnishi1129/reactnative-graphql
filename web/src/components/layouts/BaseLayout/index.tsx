/**
 * BaseLayout
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import { useRouter } from "next/router";
/* components */
import { Header } from "@/components/layouts/Header";
/* hooks */
import { useAuthenticate } from "@/hooks/useAuthenticate";

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
  /* router */
  const router = useRouter();
  /* hooks */
  const { isCheckedAuthenticate } = useAuthenticate();

  React.useEffect(() => {
    isCheckedAuthenticate(router);
  }, []);

  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
