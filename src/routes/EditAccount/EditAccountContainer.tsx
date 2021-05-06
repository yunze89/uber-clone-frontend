import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import EditAccountPresenter from "./EditAccountPresenter";
import { useQuery, useMutation } from "react-apollo";
import { USER_PROFILE } from "../../sharedQueries.queries";
import { UPDATE_PROFILE } from "./EditAccount.queries";
import {
  userProfile,
  updateProfile,
  updateProfileVariables,
} from "../../types/api";
import { toast } from "react-toastify";

interface IState {
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
  loading: boolean;
}

interface IProps extends RouteComponentProps<any> {}

const EditAccountContainer: React.SFC<IProps> = () => {
  const [state, setState] = useState<IState>({
    email: "",
    firstName: "",
    lastName: "",
    profilePhoto: "",
    loading: true,
  });

  const { email, firstName, lastName, profilePhoto, loading } = state;

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {
      target: { name, value },
    } = e;

    setState({
      [name]: value,
    } as any);
  };

  const { data } = useQuery<userProfile>(USER_PROFILE, {
    fetchPolicy: "no-cache",
  });
  if (data && "GetMyProfile" in data) {
    const {
      GetMyProfile: { user },
    } = data;
    if (user) {
      const { firstName, lastName, email, profilePhoto } = user;
      const loading = false;
      setState({
        email,
        firstName,
        lastName,
        profilePhoto,
        loading,
      } as any);
    }
  }

  const [
    updateProfileMutation,
    { loading: mutationLoading },
  ] = useMutation<updateProfile>(UPDATE_PROFILE, {
    variables: { email, firstName, lastName, profilePhoto },
    refetchQueries: [{ query: USER_PROFILE }],
    onCompleted: (data) => {
      const { UpdateMyProfile } = data;
      if (UpdateMyProfile.ok) toast.success("Profile updated!");
      else if (UpdateMyProfile.error) toast.error(UpdateMyProfile.error);
    },
  });

  return (
    <EditAccountPresenter
      email={email}
      lastName={lastName}
      firstName={firstName}
      profilePhoto={profilePhoto}
      onInputChange={onInputChange}
      loading={mutationLoading || loading}
      onSubmit={() => updateProfileMutation()}
    ></EditAccountPresenter>
  );
};

export default EditAccountContainer;
