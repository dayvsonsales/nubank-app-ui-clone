import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import UserOptions from '../../components/UserOptions';
import CreditCard from '../../components/Cards/CreditCard';
import NuContaCard from '../../components/Cards/NuContaCard';
import RewardsCard from '../../components/Cards/RewardsCard';
import FooterOptions from '../../components/FooterOptions';

import { Container, ScrollContent } from './styles';

const Home = () => {
    return (
        <Container>
            <Header name="Dayvson Sales" />
            <UserOptions />
            <ScrollContent>
                <ScrollView
                    indicatorStyle="white"
                    horizontal={false}
                    scrollEventThrottle={16}>
                    <CreditCard />
                    <NuContaCard />
                    <RewardsCard />
                </ScrollView>
            </ScrollContent>
            <FooterOptions />
        </Container>
    );
};

export default Home;
