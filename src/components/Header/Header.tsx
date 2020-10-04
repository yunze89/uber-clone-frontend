import React from 'react';
import { Container, Title } from './Header.styled';
import BackArrow from '../BackArrow';

interface IProps {
    title: string;
    backTo?: string;
}

const Header: React.SFC<IProps> = ({ title, backTo }) => (
    <Container>
        {backTo && <BackArrow backTo={backTo} />}
        <Title>{title}</Title>
    </Container>
);

export default Header;
