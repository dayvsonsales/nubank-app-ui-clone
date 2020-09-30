import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, WrapperContainer } from './styles';

const UserOptions = () => {
    return (
        <WrapperContainer>
            <Container>
                <Icon name="chevron-down" size={24} color="#a9a9a9" />
            </Container>
        </WrapperContainer>
    );
};

export default UserOptions;
