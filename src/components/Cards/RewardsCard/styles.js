import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    margin-left: 14px;
    margin-right: 14px;
    border-radius: 2px;
    border: 1px solid #ffff;
    background-color: white;
    margin-top: 24px;
`;

export const NestedContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 24px;
    padding-bottom: 64px;
`;

export const MainDashboard = styled.View`
    flex: 3;
`;

export const IconContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TitleText = styled.Text`
    font-size: 24px;
`;

export const TextContainer = styled.View`
    flex: 1;
    flex-direction: column;
    margin-top: 32px;
`;

export const TextTitle = styled.Text`
    color: black;
    font-weight: bold;
    text-align: center;
    font-size: 21px;
`;

export const TextSubtitle = styled.Text`
    font-size: 16px;
    margin-top: 10px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Footer = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: white;
    justify-content: center;
    margin-bottom: 24px;
`;

export const FooterButton = styled.TouchableHighlight`
    border: 1px solid #8b10ae;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 64px;
    padding-right: 64px;
    border-radius: 4px;
`;

export const FooterButtonText = styled.Text`
    text-transform: uppercase;
    color: #8b10ae;
    font-weight: bold;
`;
