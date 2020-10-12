import React from "react";
import SocialLoginPresenter from "./SocialLoginPresenter";

import { RouteComponentProps } from "react-router-dom";
import { useMutation } from 'react-apollo';

//gql
import { facebookConnect, facebookConnectVariables } from '../../types/api';
import { FACEBOOK_CONNECT } from './SocialLogin.queries';
import { LOG_USER_IN } from '../../innerQueries';
import { toast } from "react-toastify";

interface IState {
    firstName: string;
    lastName: string;
    email?: string;
    fbId: string;
}
interface IProps extends RouteComponentProps<any> { }

const SocialLoginContainer: React.SFC<IProps> = () => {

    const [logUserIn] = useMutation(LOG_USER_IN);

    //facebook login => facebook mutation 완료 시 로그인
    const loginCompleted = (data: any) => {
        const { FacebookConnect } = data;
        if (FacebookConnect.ok) {
            logUserIn({
                variables: {
                    token: FacebookConnect.token
                }
            })
        }
        else {
            toast.error(FacebookConnect.error);
        }
    };

    const [facebookConnectMutation] = useMutation<
        facebookConnect,
        facebookConnectVariables
    >(FACEBOOK_CONNECT, { onCompleted: loginCompleted });

    //presenter의 facebook login 성공 후 실행될 callback 함수 정의하여 props로 presenter에 전달
    const loginCallback = (res: any) => {
        console.log(res)

        const { name, first_name, last_name, id, accessToken, email } = res;

        //정상적으로 facebook으로 부터 accessToken 받아온 경우, 우리 서버에 mutation 으로 저장한다.
        if (accessToken && facebookConnectMutation) {
            toast.success(`Welcome ${name}`);
            //call mutation
            facebookConnectMutation({
                variables: {
                    email,
                    fbId: id,
                    firstName: first_name,
                    lastName: last_name
                }
            });
        } else {
            toast.error("Could not log you in :(");
        }
    };

    return (
        <SocialLoginPresenter loginCallback={loginCallback} />
    )
}

export default SocialLoginContainer;