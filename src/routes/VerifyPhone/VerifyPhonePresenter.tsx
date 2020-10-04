import React from "react";
import Button from '../../components/Button';
import Header from "../../components/Header";
import { Container, Form, ExtendedInput } from './VerifyPhonePresenter.styled';
import { Helmet } from 'react-helmet';
import { verfiyPhone, verfiyPhoneVariables } from "../../types/api";
import { MutationFunction } from 'react-apollo';

interface IProps {
    verificationCode: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onSubmit: MutationFunction<verfiyPhone, verfiyPhoneVariables>;
    loading: boolean;
}

const VerifyPhonePresenter: React.SFC<IProps> = ({
    verificationCode,
    onChange,
    onSubmit,
    loading
}) => (
        <Container>
            <Helmet>
                <title>Verifiy Phone | Huber</title>
            </Helmet>
            <Header backTo={'/phone-login'} title={'Verify Phone Number'}></Header>
            <Form>
                <ExtendedInput
                    value={verificationCode}
                    placeholder={"Enter Verification Code"}
                    onChange={onChange}
                    name="verificationCode"
                />
                <Button
                    disabled={loading}
                    value={loading ? "Verifing" : "Submit"}
                    onClick={onSubmit}
                ></Button>
            </Form>
        </Container>
    )

export default VerifyPhonePresenter;