import styled from "../../typed-components";

export const Container = styled.header`
    background-color: black;
    color: white;
    display: flex;
    height: 50px;
    font-size: 20px;
    font-weight: 300;
    align-items: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    & svg {
      fill: white;
    }
    margin-bottom: 50px;
    padding: 0 10px;
`;

export const Title = styled.h2`
    margin-left: 10px;
`;