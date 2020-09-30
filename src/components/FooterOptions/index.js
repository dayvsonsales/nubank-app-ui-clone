import React from 'react';

import { Container } from './styles';

import { ScrollView } from 'react-native';

import OptionCard from '../../components/Cards/OptionCard';

const FooterOptions = () => {
    return (
        <Container>
            <ScrollView horizontal>
                <OptionCard name="Indicar amigos" icon="account-plus" />
                <OptionCard name="Pagar" icon="barcode" />
                <OptionCard name="Transferir" icon="bank-transfer-out" />
                <OptionCard name="Depositar" icon="bank-transfer-in" />
                <OptionCard name="Recarga de celular" icon="cellphone-iphone" />
                <OptionCard name="Cobrar" icon="home-currency-usd" />
            </ScrollView>
        </Container>
    );
};

export default FooterOptions;
