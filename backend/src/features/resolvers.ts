import { Resolvers } from '@/__generated__/graphql';
import * as helloWorldMutations from '@/features/hello-world/mutations';
import * as helloWorldQueries from '@/features/hello-world/queries';

const Query = {
  ...helloWorldQueries
}

const Mutation = {
  ...helloWorldMutations
}

export const resolvers: Resolvers = {
  Query,
  Mutation
}