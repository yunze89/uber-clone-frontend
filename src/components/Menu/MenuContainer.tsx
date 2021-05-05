import React from "react";
import MenuPresenter from "./MenuPresenter";

import { useQuery, useMutation } from "react-apollo";
import { USER_PROFILE } from "../../sharedQueries.queries";
import { TOGGLE_DRIVING } from "./Menu.queries";
import { userProfile, toggleDriving } from "../../types/api";

const MenuContainer = () => {
  const { loading, data } = useQuery<userProfile>(USER_PROFILE);
  const [toggleDrivingMutation] = useMutation<toggleDriving>(TOGGLE_DRIVING, {
    refetchQueries: [{ query: USER_PROFILE }], //mutation 실행시 새로고침 없이 프로필 변경사항을 바로 반영하기 위해
  });
  return (
    <MenuPresenter
      data={data}
      loading={loading}
      ToggleDrivingMutation={toggleDrivingMutation}
    />
  );
};

export default MenuContainer;
