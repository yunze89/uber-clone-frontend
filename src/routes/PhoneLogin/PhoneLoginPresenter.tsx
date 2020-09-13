import Input from '../../components/Input';
import countries from '../../lib/countries';
import React from 'react';
import Helmet from 'react-helmet';
import { Container, BackArrowExtended, Title, CountrySelect, CountryOption, Form, Button } from './PhoneLoginPresenter.styled';

const PhoneLoginPresenter = () => (
    <Container>
        <Helmet>
            <title>Phone Login | Huber</title>
        </Helmet>
        <BackArrowExtended backTo={'/'} />
        <Title>Enter your mobile number</Title>
        <CountrySelect>
            {countries.map((country, index) => (
                <CountryOption key={index} value={CountryOption.dial_code}>
                    {country.flag} {country.name} {country.dial_code}
                </CountryOption>
            ))}
        </CountrySelect>
        <Form>
            <Input placeholder={"053 690 2129"} />
            <Button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={"white"}
                >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
            </Button>
        </Form>
    </Container >
)

export default PhoneLoginPresenter