import React from 'react';
import { Container } from './Input.styled'

interface IProps {
    placeholder?: string;
    type?: string;
    required?: boolean;
    value: string;
    onChange: any;
    name?: string;
    className?: string;
}

const Input: React.SFC<IProps> = ({
    placeholder = "",
    type = "text",
    required = true,
    value,
    onChange,
    name = "",
    className
}: any) =>
    <Container
        placeholder={placeholder}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
        className={className}
    />;
export default Input;