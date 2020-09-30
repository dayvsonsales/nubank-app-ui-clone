import styled from 'styled-components/native';

export const WrapperContainer = styled.View`
    width: 80px;
    height: 80px;
    margin-right: 8px;
`;

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(148, 0, 211, 0.3);
    border: 1px solid rgba(148, 0, 211, 0.3);
    border-radius: 4px;
    padding: 4px;
`;

export const Text = styled.Text`
    color: white;
    font-size: 11px;
`;
