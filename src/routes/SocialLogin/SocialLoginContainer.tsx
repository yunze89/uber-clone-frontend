import React, { useState } from "react";
import SocialLoginPresenter from "./SocialLoginPresenter";

import { RouteComponentProps } from "react-router-dom";
import { useMutation } from 'react-apollo';

//gql
import { facebookConnect, facebookConnectVariables } from '../../types/api';
import { FACEBOOK_CONNECT } from './SocialLogin.queries';

interface IState {
    firstName: string;
    lastName: string;
    email?: string;
    fbId: string;
}
interface IProps extends RouteComponentProps<any> { }

const SocialLoginContainer: React.SFC<IProps> = () => {

    const [facebookConnect] = useMutation(FACEBOOK_CONNECT);

    return (
        <SocialLoginPresenter />
    )
}

export default SocialLoginContainer;