import { gql } from "apollo-boost";

export const USER_PROFILE = gql`
  query userProfile {
    GetMyProfile {
      ok
      error
      user {
        id
        profilePhoto
        fullName
        firstName
        lastName
        email
        isDriving
      }
    }
  }
`;
