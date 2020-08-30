import { gql } from "apollo-boost";

//clientState 쿼리
export const IS_LOGGED_IN = gql`
  {
    auth {
      isLoggedIn @client
    }
  }
`;
