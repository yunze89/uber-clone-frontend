import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import VerifyPhonePresenter from "./VerifyPhonePresenter";
import { LOG_USER_IN } from "../../innerQueries";
import { VERIFY_PHONE } from "./VerifyPhone.queries";
import { verfiyPhone, verfiyPhoneVariables } from "../../types/api";
import { useMutation } from "react-apollo";

interface IState {
  phoneNumber: string;
  verificationCode: string;
}

interface IProps extends RouteComponentProps<any> {}

const VerifyPhoneContainer: React.SFC<IProps> = (props) => {
  const [state, setState] = useState<IState>({
    phoneNumber: "",
    verificationCode: "",
  });

  useEffect(() => {
    //state에 phone login에서 전달받은 phone 데이터가 있는지 확인하는 안전장치
    try {
      Object.hasOwnProperty.call(props.location.state, "phone");
      const { phone }: any = props.location.state;
      setState({
        ...state,
        phoneNumber: phone,
      });
    } catch (e) {
      console.log(e);
      //props.history.push('/');    //없을 시 홈으로 다시 이동
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [logUserIn] = useMutation(LOG_USER_IN);

  const onVerifyCompleted = (data: any) => {
    const { CompletePhoneVerification } = data;
    console.log(data);

    if (CompletePhoneVerification.ok) {
      if (CompletePhoneVerification.token) {
        logUserIn({
          variables: {
            token: CompletePhoneVerification.token,
          },
        });
        toast.success("You're verified, loggin in now");
      }
    } else {
      toast.error(CompletePhoneVerification.error);
    }
  };

  const [verifyPhone, { loading }] = useMutation<
    verfiyPhone,
    verfiyPhoneVariables
  >(VERIFY_PHONE, {
    variables: { key: state.verificationCode, phoneNumber: state.phoneNumber },
    onCompleted: onVerifyCompleted,
  });

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { name, value },
    } = event;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <VerifyPhonePresenter
      onChange={onInputChange}
      verificationCode={state.verificationCode}
      onSubmit={verifyPhone}
      loading={loading}
    />
  );
};

export default VerifyPhoneContainer;
