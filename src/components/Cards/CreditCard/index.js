import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Container,
    TitleContainer,
    TitleText,
    AmountContainer,
    AmountTitle,
    AmountValue,
    AvailableLimitContainer,
    AvailableLimitText,
    AvailableLimitValue,
    VerticalLine,
    NestedContainer,
    MainDashboard,
    FooterRecentOrder,
    FooterRecentOrderText,
} from './styles';

const CreditCard = () => {
    return (
        <Container>
            <NestedContainer>
                <MainDashboard>
                    <TitleContainer>
                        <Icon
                            name="credit-card-outline"
                            size={24}
                            color="grey"
                        />
                        <TitleText>Cartão de crédito</TitleText>
                    </TitleContainer>
                    <AmountContainer>
                        <AmountTitle>Fatura atual</AmountTitle>
                        <AmountValue>R$ 0,00</AmountValue>
                        <AvailableLimitContainer>
                            <AvailableLimitText>
                                Limite disponível
                            </AvailableLimitText>
                            <AvailableLimitValue>
                                R$ 4.750,00
                            </AvailableLimitValue>
                        </AvailableLimitContainer>
                    </AmountContainer>
                </MainDashboard>
                <VerticalLine />
            </NestedContainer>
            <FooterRecentOrder>
                <Icon name="bus" size={28} color="grey" />
                <FooterRecentOrderText numberOfLines={2}>
                    Compra mais recente em Uberbr Uber * Pending no valor de R$
                    14,00
                </FooterRecentOrderText>
                <Icon name="chevron-right" size={20} color="grey" />
            </FooterRecentOrder>
        </Container>
    );
};

export default CreditCard;
