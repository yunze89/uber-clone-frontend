import { gql } from 'apollo-boost';

//phone login mutation
export const PHONE_SIGN_IN = gql`
    mutation startPhoneVerification($phoneNumber: String!){
        StartPhoneVerification(phoneNumber: $phoneNumber){
            ok
            error
        }
    }
`;