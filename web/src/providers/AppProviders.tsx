/**
 * AppProviders
 * @package providers
 * @copyright Yuki Onishi
 */
import React from "react";
/* contexts */
import { AppContextProvider } from "@/contexts/AppContext";
/* providers */
import { GraphQLApolloProvider } from "./GraphQLApolloProvider";

/**
 * props
 */
type Props = {
  children: React.ReactNode;
};

/**
 * AppProvider
 * @param {Props} props
 * @returns
 */
export const AppProvider: React.VFC<Props> = ({ children }: Props) => {
  return (
    <AppContextProvider>
      <GraphQLApolloProvider>{children}</GraphQLApolloProvider>
    </AppContextProvider>
  );
};
