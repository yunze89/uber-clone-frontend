import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Container, Header, Logo, Title, Footer, PhoneLogin, Subtitle, FakeInput, Grey, SocialLogin, SocialLink } from './LoginPresenter.styled';

interface IProps extends RouteComponentProps<any> { }

const OutHomePresenter: React.SFC<IProps> = () => (
    <Container>
        <Header>
            <Logo>
                <Title>
                    Huber
                </Title>
            </Logo>
        </Header>
        <Footer>
            <Link to={'/phone-login'}>
                <PhoneLogin>
                    <Subtitle>Get moving with Huber</Subtitle>
                    <FakeInput>
                        +82 <Grey>Enter Your mobile number</Grey>
                    </FakeInput>
                </PhoneLogin>
            </Link>
            <Link to={"/social-login"}>
                <SocialLogin>
                    <SocialLink>Or connect with social</SocialLink>
                </SocialLogin>
            </Link>
        </Footer>
    </Container>
)

export default OutHomePresenter;