import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Container,
    IconContainer,
    NestedContainer,
    MainDashboard,
    Footer,
    TextContainer,
    TextTitle,
    TextSubtitle,
    FooterButton,
    FooterButtonText,
} from './styles';

const RewardsCard = () => {
    return (
        <Container>
            <NestedContainer>
                <MainDashboard>
                    <IconContainer>
                        <Icon name="gift-outline" size={24} color="grey" />
                    </IconContainer>
                    <TextContainer>
                        <TextTitle>Nubank Rewards</TextTitle>
                        <TextSubtitle>
                            Acumule pontos que nunca expiram e troque por
                            passagens aérea ou serviços que você realmente usa.{' '}
                        </TextSubtitle>
                    </TextContainer>
                </MainDashboard>
            </NestedContainer>
            <Footer>
                <FooterButton>
                    <FooterButtonText>Ative o seu rewards</FooterButtonText>
                </FooterButton>
            </Footer>
        </Container>
    );
};

export default RewardsCard;
