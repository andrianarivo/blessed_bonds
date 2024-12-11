import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: `${import.meta.env.VITE_API_SERVER_URI || ""}/graphql`,
});

const authLink = setContext((_, { headers }: Record<string, Record<string, unknown>>) => {
  if (typeof window === "undefined") {
    return {
      headers,
    };
  }

  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ networkError }) => {
  if (networkError) console.error("[Network error]:", networkError);
});

const links = ApolloLink.from([authLink, errorLink, httpLink]);

export const client = new ApolloClient({
  link: links,
  cache: new InMemoryCache(),
});
