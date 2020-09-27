import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { toast } from "react-toastify";

//graphql query
import {
    startPhoneVerification,
    startPhoneVerificationVariables
} from "../../types/api";
import { PHONE_SIGN_IN } from './PhoneLogin.queries';
import { useMutation } from 'react-apollo';

interface IState {
    countryCode: string;
    phoneNumber: string;
}

interface IMutation {
    phoneNumber: string;
}

//class PhoneSignInMutation extends Mutation<any, IMutation> { }

const PhoneLoginContainer: React.SFC<
    RouteComponentProps<any>> = () => {
        const [inputs, setInputs] = useState({
            countryCode: "+82", //기본 코드
            phoneNumber: "" //전화 번호})
        });

        //테스트 : mutation 전송 후 응답 콜백 (update)
        // const afterSubmit = (cache: any, data: any) => {
        //     console.log(data);
        // }

        //signin mutation completed 콜백
        const onSignInCompleted = (data: any) => {
            const { StartPhoneVerification } = data;
            console.log(data);
            if (StartPhoneVerification.ok) {
                return;
            }
            else {
                toast.error(StartPhoneVerification.error);
            }
        }

        const { countryCode, phoneNumber } = inputs;
        const internationalPhoneNumber = `${countryCode}-${phoneNumber}`;
        const [phoneSignIn, { loading/*, error, data*/ }] = useMutation<
            startPhoneVerification,
            startPhoneVerificationVariables
        >(PHONE_SIGN_IN, { variables: { phoneNumber }, onCompleted: onSignInCompleted }); //https://www.apollographql.com/docs/tutorial/mutations/

        const onInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = event => {
            const {
                target: { name, value }
            } = event;
            setInputs({
                ...inputs,
                [name]: value
            });
        };

        //login submit (자식 component에게 props로 전달되고, 자식에서 호출됨)
        const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
            event.preventDefault();
            //const { countryCode, phoneNumber } = this.state;
            console.log('submit', countryCode, phoneNumber);

            //전화 번호 형태 정규식 검사 @TOFIX
            const isValid = /^\+[1-9]+-[0-9]{10,11}$/.test(internationalPhoneNumber);

            if (isValid) phoneSignIn({ variables: { phoneNumber: internationalPhoneNumber }, /*update: afterSubmit*/ });    //https://www.apollographql.com/docs/react/data/mutations/
            //입력값 형식 에러 시 toast메시지 발생
            else
                toast.error('Please write a valid phone number' + internationalPhoneNumber);   //@주의 AppContiner에서 ToastContainer를 포함시켜야 한다.
        };

        return (
            <PhoneLoginPresenter
                countryCode={countryCode}
                phoneNumber={phoneNumber}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
                loading={loading}
            />
        )

    };

export default PhoneLoginContainer