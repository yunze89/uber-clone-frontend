import React from "react";
import Helmet from "react-helmet";
import Sidebar from "react-sidebar";
import styled from "../../typed-components";

const Container = styled.div``;

const HomePresenter = () => (
  <Container>
    <Helmet>
      <title>Home | Huber</title>
    </Helmet>
    <Sidebar
      sidebar={<b>Sidebar contents</b>}
      open={true}
      styles={{
        sidebar: {
          background: "white",
          width: "80%",
          zIndex: "10",
        },
      }}
    >
      <button>Open sidebar</button>
    </Sidebar>
    hello
  </Container>
);

export default HomePresenter;
