import React from "react";
import { Container, Image, Input } from "./PhotoInput.styled";

interface IProps {
  uploading: boolean;
  photoUrl: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const PhotoInput: React.SFC<IProps> = ({ uploading, photoUrl, onChange }) => (
  <Container>
    <Input id="photo" type="file" accept="image/*" onChange={onChange} />
    <Image htmlFor="photo">
      {uploading && "⏰"}
      {console.log(photoUrl)}
      {!uploading && <img src={photoUrl} alt="profile" />}
    </Image>
  </Container>
);

export default PhotoInput;
