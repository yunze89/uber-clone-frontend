import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import HomePresenter from "./HomePresenter";

import { useQuery } from "react-apollo";
import { USER_PROFILE } from "../../sharedQueries.queries";
import { userProfile } from "../../types/api";

interface IProps extends RouteComponentProps<any> {}

const HomeContainer: React.SFC<IProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { loading } = useQuery<userProfile>(USER_PROFILE);

  return (
    <HomePresenter
      loading={loading}
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
    />
  );
};

export default HomeContainer;
