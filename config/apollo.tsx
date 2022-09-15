import { ReactNode, useState } from "react";
import {
  ApolloProvider as Provider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { GRAPHQL_ENDPOINT, ENABLE_GRAPHQL } from "@env";

export const createClient = () =>
  new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

export const ApolloProvider = ({ children }: { children: ReactNode }) => {
  const [client] = useState(createClient());

  return ENABLE_GRAPHQL ? (
    <Provider client={client}>{children}</Provider>
  ) : (
    <>{children}</>
  );
};
