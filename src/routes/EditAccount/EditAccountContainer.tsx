import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import EditAccountPresenter from "./EditAccountPresenter";
import { useQuery, useMutation } from "react-apollo";
import { USER_PROFILE } from "../../sharedQueries.queries";
import { UPDATE_PROFILE } from "./EditAccount.queries";
import { userProfile, updateProfile } from "../../types/api";
import { toast } from "react-toastify";
import { CL_API_KEY } from "../../config/config";
import axios from "axios";

interface IState {
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
  loading: boolean;
  uploading: boolean;
}

interface IProps extends RouteComponentProps<any> {}

const EditAccountContainer: React.SFC<IProps> = () => {
  const [state, setState] = useState<IState>({
    email: "",
    firstName: "",
    lastName: "",
    profilePhoto: "",
    loading: true,
    uploading: false,
  });

  const {
    email,
    firstName,
    lastName,
    profilePhoto,
    loading,
    uploading,
  } = state;

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const {
      target: { name, value, files },
    } = e;

    if (files) {
      setState({
        uploading: true,
      } as any);

      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("api_key", CL_API_KEY);
      formData.append("upload_preset", "an9loay9");
      formData.append("timestamp", String(Date.now() / 1000));
      const {
        data: { secure_url },
      } = await axios.post(
        "https://api.cloudinary.com/v1_1/dcmpgwz4w/image/upload",
        formData
      );

      console.log(secure_url);

      if (secure_url) {
        setState({
          ...state,
          profilePhoto: secure_url,
          uploading: false,
        } as any);
      }
      return;
    }

    setState({
      ...state,
      [name]: value,
    } as any);
  };

  const [
    updateProfileMutation,
    { loading: mutationLoading },
  ] = useMutation<updateProfile>(UPDATE_PROFILE, {
    variables: { email, firstName, lastName, profilePhoto },
    refetchQueries: [{ query: USER_PROFILE }],
    onCompleted: (data) => {
      console.log("mutation completed", data);
      const { UpdateMyProfile } = data;
      if (UpdateMyProfile.ok) toast.success("Profile updated!");
      else if (UpdateMyProfile.error) toast.error(UpdateMyProfile.error);
    },
  });

  const { data } = useQuery<userProfile>(USER_PROFILE, {
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
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
  }, [data]);

  return (
    <EditAccountPresenter
      email={email}
      lastName={lastName}
      firstName={firstName}
      profilePhoto={profilePhoto}
      onInputChange={onInputChange}
      loading={mutationLoading || loading}
      uploading={uploading}
      onSubmit={() =>
        updateProfileMutation({
          variables: { email, firstName, lastName, profilePhoto },
        })
      }
    ></EditAccountPresenter>
  );
};

export default EditAccountContainer;
