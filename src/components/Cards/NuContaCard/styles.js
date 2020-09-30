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

export const SubContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const TitleContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const TitleText = styled.Text`
    font-size: 14px;
    color: #343434;
    margin-left: 14px;
`;

export const AmountContainer = styled.View`
    flex: 1;
    flex-direction: column;
    margin-top: 32px;
`;

export const AmountTitle = styled.Text`
    color: grey;
`;

export const AmountValue = styled.Text`
    font-size: 32px;
`;

export const Footer = styled.View`
    background-color: #e8e8e8;
    padding: 24px;
`;

export const NestedFooterContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const FooterText = styled.Text`
    width: 68%;
    margin-left: 10px;
    margin-right: 20px;
    font-size: 12px;
`;
