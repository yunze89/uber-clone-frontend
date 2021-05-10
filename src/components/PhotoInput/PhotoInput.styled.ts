import styled from "../../typed-components";

export const Container = styled.div``;

export const Image = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  margin-bottom: 35px;
  border: 2px solid black;
  border-radius: 50%;
  font-size: 28px;
  cursor: pointer;
  overflow: hidden;
  & img {
    width: 80px;
    height: 80px;
  }
`;

export const Input = styled.input`
  visibility: hidden;
  height: 1px;
  opacity: 0;
  &:focus {
    outline: none;
  }
`;
