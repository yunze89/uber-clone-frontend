import React from "react";
import Helmet from "react-helmet";
import Sidebar from "react-sidebar";
import Menu from "../../components/Menu";
import styled from "../../typed-components";

const Container = styled.div``;

interface IProps {
  loading: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HomePresenter: React.SFC<IProps> = ({
  loading,
  isMenuOpen,
  toggleMenu,
}) => (
  <Container>
    <Helmet>
      <title>Home | Huber</title>
    </Helmet>
    <Sidebar
      sidebar={<Menu />}
      open={isMenuOpen}
      onSetOpen={toggleMenu}
      styles={{
        sidebar: {
          background: "white",
          width: "80%",
          zIndex: "10",
        },
      }}
    >
      {!loading && <button onClick={toggleMenu}>Open sidebar</button>}
    </Sidebar>
    hello
  </Container>
);

export default HomePresenter;
