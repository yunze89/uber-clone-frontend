import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PhoneLoginPresenter from './PhoneLoginPresenter';

interface IState {
    countryCode: string;
    phoneNumber: string;
}

class PhoneLoginContainer extends React.Component<
    RouteComponentProps<any>,
    IState
    > {

    //자식 component에서 default 값으로 사용되도록 설정하는 상태값
    public state = {
        countryCode: "+82", //기본 코드
        phoneNumber: "" //전화 번호
    }

    public onInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = event => {
        const {
            target: { name, value }
        } = event;
        this.setState({ [name]: value } as any);
    }

    //자식 component에게 props로 전달되고, 호출됨
    public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();
        const { countryCode, phoneNumber } = this.state;
        console.log(countryCode, phoneNumber);
    }

    public render() {

        //상태 값
        const { countryCode, phoneNumber } = this.state;

        //자식 component에게 props로 값 전달
        return <PhoneLoginPresenter
            countryCode={countryCode}
            phoneNumber={phoneNumber}
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
        />;
    }
}

export default PhoneLoginContainer