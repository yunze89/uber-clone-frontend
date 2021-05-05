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
import { MutationFunction } from "react-apollo";
import { userProfile, toggleDriving } from "../../types/api";

interface IProps {
  data?: userProfile;
  loading: boolean;
  ToggleDrivingMutation: MutationFunction<toggleDriving>;
}

const MenuPresenter: React.SFC<IProps> = ({
  data: { GetMyProfile: { user = null } = {} } = { GetMyProfile: {} },
  loading,
  ToggleDrivingMutation,
}) => (
  <Container>
    {!loading && user && user.fullName && (
      <React.Fragment>
        <Header>
          <Grid>
            <Link to={"/edit-account"}>
              <Image
                src={
                  user.profilePhoto ||
                  "https://yt3.ggpht.com/-CTwXMuZRaWw/AAAAAAAAAAI/AAAAAAAAAAA/HTJy-KJ4F2c/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                }
              />
            </Link>
            <Text>
              <Name>{user.fullName}</Name>
              <Rating></Rating>
            </Text>
          </Grid>
        </Header>
        <SLink to="/trips">Your Trips</SLink>
        <SLink to="/settings">Settings</SLink>
        <ToggleDriving
          onClick={() => ToggleDrivingMutation()}
          isDriving={user.isDriving}
        >
          {user.isDriving ? "Stop driving" : "Start driving"}
        </ToggleDriving>
      </React.Fragment>
    )}
  </Container>
);

export default MenuPresenter;
