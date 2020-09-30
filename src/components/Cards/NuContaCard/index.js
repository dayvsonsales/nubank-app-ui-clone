import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Container,
    TitleContainer,
    SubContainer,
    TitleText,
    AmountContainer,
    AmountTitle,
    AmountValue,
    NestedContainer,
    MainDashboard,
    Footer,
    FooterText,
    NestedFooterContainer,
} from './styles';

const NuContaCard = () => {
    return (
        <Container>
            <NestedContainer>
                <MainDashboard>
                    <TitleContainer>
                        <SubContainer>
                            <Icon
                                name="cash-usd-outline"
                                size={24}
                                color="grey"
                            />
                            <TitleText>Conta</TitleText>
                        </SubContainer>

                        <Icon name="eye-off-outline" size={24} color="grey" />
                    </TitleContainer>
                    <AmountContainer>
                        <AmountTitle>Saldo disponível</AmountTitle>
                        <AmountValue>R$ 12.342,75</AmountValue>
                    </AmountContainer>
                </MainDashboard>
            </NestedContainer>
            <Footer>
                <NestedFooterContainer>
                    <Icon name="credit-card-outline" size={28} color="grey" />
                    <FooterText numberOfLines={2}>
                        Fatura do cartão no valor de R$ 191,12 paga ontem
                    </FooterText>
                    <Icon name="chevron-right" size={20} color="grey" />
                </NestedFooterContainer>
            </Footer>
        </Container>
    );
};

export default NuContaCard;
