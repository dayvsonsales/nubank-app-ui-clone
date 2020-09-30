import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    margin-left: 14px;
    margin-right: 14px;
    border-radius: 2px;
    border: 1px solid #ffff;
    background-color: white;
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

export const VerticalLine = styled.View`
    background-color: #9acd32;
    height: 175%;
    margin-top: -24px;
    margin-right: -24px;
    width: 5px;
    border-radius: 4px;
    overflow: hidden;
`;

export const TitleContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const TitleText = styled.Text`
    font-size: 14px;
    margin-left: 14px;
    color: #343434;
`;

export const AmountContainer = styled.View`
    flex: 1;
    flex-direction: column;
    margin-top: 32px;
`;

export const AmountTitle = styled.Text`
    text-transform: uppercase;
    color: #1e90ff;
    font-weight: bold;
`;

export const AmountValue = styled.Text`
    font-size: 36px;
    color: #1e90ff;
`;

export const AvailableLimitContainer = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 5px;
`;

export const AvailableLimitText = styled.Text`
    margin-right: 5px;
`;

export const AvailableLimitValue = styled.Text`
    color: #9acd32;
    font-weight: bold;
`;

export const FooterRecentOrder = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: #e8e8e8;
    padding: 24px;
    align-items: center;
    justify-content: space-between;
`;

export const FooterRecentOrderText = styled.Text`
    margin-left: 10px;
    margin-right: 10px;
    font-size: 12px;
    width: 68%;
`;
