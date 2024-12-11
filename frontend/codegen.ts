import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/**/*.{ts,tsx}",
  config: {
    scalars: {
      JWT: "string",
      Date: "Date",
    },
    enumsAsTypes: true,
  },
  generates: {
    "src/gql/": {
      preset: "client",
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;
