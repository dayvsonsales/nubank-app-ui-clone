import React from 'react';

import { Container, Name, Logo, WrapperContainer } from './styles';

import logo from '../../assets/Nubank_Logo.png';

const Header = ({ name }) => {
    return (
        <WrapperContainer>
            <Container>
                <Logo source={logo} />
                <Name>{name}</Name>
            </Container>
        </WrapperContainer>
    );
};

export default Header;
