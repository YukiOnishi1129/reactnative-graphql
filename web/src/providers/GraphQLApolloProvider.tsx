/**
 * GraphQLApolloProvider
 * @package providers
 * @copyright Yuki Onishi
 */
import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";
/* contexts */
import { useAppState } from "@/contexts/AppContext";
/* hooks */
import { useApolloClient } from "@/hooks/useApolloClient";

/**
 * props
 */
type Props = {
  children: React.ReactNode;
};

/**
 * GraphQLApolloProvider
 * @param param0
 */
export const GraphQLApolloProvider: React.VFC<Props> = ({
  children,
}: Props) => {
  /* contexts */
  const state = useAppState(); // eslint-disable-line
  /* hooks */
  const { createApolloClient } = useApolloClient();
  /* local */
  const [client, setClient] = React.useState<
    ApolloClient<NormalizedCacheObject> | undefined
  >(undefined);

  React.useEffect(() => {
    const appClient = createApolloClient();
    setClient(appClient);
  }, [createApolloClient]);

  if (!client) return <CircularProgress />;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
