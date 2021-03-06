import { gql } from 'apollo-boost';

//client state mutation
export const LOG_USER_IN = gql`
    mutation logUserIn($token: String!){
        logUserIn(token: $token) @client
    }
`;