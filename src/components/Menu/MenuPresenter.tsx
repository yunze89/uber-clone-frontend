import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  SLink,
  Image,
  Name,
  Rating,
  Text,
  Grid,
  ToggleDriving,
} from "./MenuPresenter.styled";

const MenuPresenter: React.SFC = () => (
  <Container>
    <Header>
      <Grid>
        <Link to={"/edit-account"}>
          <Image
            src={
              "https://yt3.ggpht.com/-CTwXMuZRaWw/AAAAAAAAAAI/AAAAAAAAAAA/HTJy-KJ4F2c/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
            }
          />
        </Link>
        <Text>
          <Name>Yunsuk Hong</Name>
          <Rating>4.5</Rating>
        </Text>
      </Grid>
    </Header>
    <SLink to="/trips">Your Trips</SLink>
    <SLink to="/settings">Settings</SLink>
    <ToggleDriving isDriving={true}>
      {true ? "Stop driving" : "Start driving"}
    </ToggleDriving>
  </Container>
);

export default MenuPresenter;
