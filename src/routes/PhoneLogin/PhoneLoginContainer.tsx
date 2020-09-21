import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { toast } from "react-toastify";

//graphql query
import { PHONE_SIGN_IN } from './PhoneLogin.queries';
import { Mutation, useMutation } from 'react-apollo';

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

        const { countryCode, phoneNumber } = inputs;
        const internationalPhoneNumber = `${countryCode}-${phoneNumber}`;
        const [phoneSignIn, { error, data }] = useMutation<
            { phoneSignIn: any },
            { phoneNumber: string }
        >(PHONE_SIGN_IN, { variables: { phoneNumber } });

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

            //전화 번호 형태 정규식 검사
            const isValid = /^\+[1-9]{1}[0-9]{7, 11}$/.test(internationalPhoneNumber);

            if (isValid) phoneSignIn();
            else
                toast.error('Please write a valid phone number' + countryCode + phoneNumber);   //@주의 AppContiner에서 ToastContainer를 포함시켜야 한다.
        };

        return (
            <PhoneLoginPresenter
                countryCode={countryCode}
                phoneNumber={phoneNumber}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
            />
        )

    };

export default PhoneLoginContainer