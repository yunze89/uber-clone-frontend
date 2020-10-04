import React from 'react';
import { Container } from './Button.styled';

interface IProps {
    value: string;
    onClick: any;
    disabled?: boolean;
}

const Button: React.SFC<IProps> = ({ value, onClick, disabled = false }) => (
    <Container value={value} disabled={false} onClick={onClick} />
)

export default Button;