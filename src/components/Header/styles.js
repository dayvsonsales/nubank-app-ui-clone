import styled from 'styled-components/native';

import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const WrapperContainer = styled.SafeAreaView`
    margin-top: ${(prop) => (Platform.OS === 'ios' ? '50px' : '20px')};
    height: 40px;
`;

export const Logo = styled.Image`
    margin-right: 10px;
`;

export const Name = styled.Text`
    font-weight: bold;
    color: #ffff;
    text-align: center;
    font-size: 20px;
`;
