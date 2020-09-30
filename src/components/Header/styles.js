import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const WrapperContainer = styled.SafeAreaView`
    margin-top: 50px;
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
