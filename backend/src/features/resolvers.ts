import { Resolvers } from "@/__generated__/graphql";
import * as helloWorldMutations from "@/features/me/mutations";
import * as me from "@/features/me/queries";

const Query = {
  ...me,
};

const Mutation = {
  ...helloWorldMutations,
};

export const resolvers: Resolvers = {
  Query,
  Mutation,
};
