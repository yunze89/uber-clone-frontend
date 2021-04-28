import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import HomePresenter from "./HomePresenter";

interface IProps extends RouteComponentProps<any> {}

const HomeContainer: React.SFC<IProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return <HomePresenter isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />;
};

export default HomeContainer;
