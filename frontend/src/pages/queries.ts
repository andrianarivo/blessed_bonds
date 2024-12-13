import { graphql } from "@/gql";

export const USER_FRAGMENT = graphql(`
  fragment UserFields on User {
    id
    email
    name
    avatarUri
    provider
    providerId
  }
`);
