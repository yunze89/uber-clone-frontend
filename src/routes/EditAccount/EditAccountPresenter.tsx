import React from "react";
import { MutationFunction } from "react-apollo";
import Helmet from "react-helmet";
import Button from "../../components/Button";
import Header from "../../components/Header";
import {
  Container,
  ExtendedInput,
  ExtendedForm,
} from "./EditAccountPresenter.styled";

interface IProps {
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
  onSubmit?: MutationFunction;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  loading?: boolean;
}

const EditAccountPresenter: React.SFC<IProps> = ({
  firstName,
  lastName,
  email,
  profilePhoto,
  onSubmit,
  onInputChange,
  loading,
}) => (
  <Container>
    <Helmet>
      <title>Edit Account | Huber</title>
    </Helmet>
    <Header title="Edit Account" backTo={"/"} />
    <ExtendedForm submitFn={onSubmit}>
      <ExtendedInput
        onChange={onInputChange}
        type="text"
        value={firstName}
        placeholder="First Name"
        name="firstName"
      ></ExtendedInput>
      <ExtendedInput
        onChange={onInputChange}
        type="text"
        value={lastName}
        placeholder="Last Name"
        name="lastName"
      ></ExtendedInput>
      <ExtendedInput
        onChange={onInputChange}
        type="email"
        value={email}
        placeholder="Email"
        name="email"
      ></ExtendedInput>
      <Button
        onClick={onSubmit}
        value={loading ? "Loading" : "Update"}
      ></Button>
    </ExtendedForm>
  </Container>
);

export default EditAccountPresenter;
