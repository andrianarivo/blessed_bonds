import { graphql } from "@/gql";

export const SIGN_UP = graphql(`
  mutation SignUp($email: String!, $password: String!, $name: String!) {
    signUp(email: $email, password: $password, name: $name) {
      token
      user {
        ...UserFields
      }
    }
  }
`);
