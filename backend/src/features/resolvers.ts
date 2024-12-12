import { Resolvers } from "@/__generated__/graphql";
import * as uploadProfilePicture from "@/features/me/mutations";
import * as me from "@/features/me/queries";
import * as signIn from "@/features/sign-in/mutations";
import * as signUp from "@/features/sign-up/mutations";

const Query = {
  ...me,
};

const Mutation = {
  ...uploadProfilePicture,
  ...signIn,
  ...signUp,
};

export const resolvers: Resolvers = {
  Query,
  Mutation,
};
