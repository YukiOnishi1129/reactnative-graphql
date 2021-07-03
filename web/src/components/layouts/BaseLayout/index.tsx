/**
 * BaseLayout
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import { useRouter } from "next/router";
/* components */
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
/* hooks */
import { useAuthenticate } from "@/hooks/useAuthenticate";
/* styles */
import { useStyles } from "./style";

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
  /* styles */
  const classes = useStyles();

  React.useEffect(() => {
    isCheckedAuthenticate(router);
  }, []);

  return (
    <div>
      <Header />
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </div>
  );
};
