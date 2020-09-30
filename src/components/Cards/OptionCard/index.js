import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { WrapperContainer, Container, Text } from './styles';

const OptionCard = ({ name, icon }) => {
    return (
        <WrapperContainer>
            <Container>
                <Icon name={icon} color="white" size={24} />
                <Text>{name}</Text>
            </Container>
        </WrapperContainer>
    );
};

export default OptionCard;
