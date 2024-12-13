import { ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { client } from "./apollo-client.ts";
import { ErrorBoundary } from "./components/error-boundary.tsx";
import "./index.css";
import router from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ErrorBoundary>
  </StrictMode>
);
