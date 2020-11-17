import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const TotalContainer = styled.View`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const TotalValue = styled.Text`
  font-family: Comfortaa-Bold;
  font-size: 48px;
  color: #FDFDFD;
`;

export const TotalLabel = styled.Text`
  font-family: Comfortaa-Regular;
  font-size: 12px;
  color: #FDFDFD;
`;

export const BalanceCard = styled.View`  
  width: 100%;
  height: 30%;
  margin: 15px 0 40px 0;
  elevation: 5;
`;

export const BalanceCardContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const CountAccountsContainer = styled.View`
  flex-direction: row;
`;

export const CountAccountsLabel = styled.Text`
  font-family: Comfortaa-Regular;
  color: #FFF;
`;

export const CountAccountsValue = styled.Text`
  font-family: Comfortaa-SemiBold;
  color: #FFF;
  margin-left: 10px;
`;

export const ValuesContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TypeContainer = styled.View`
  display: flex;
`;

export const TypeLabel = styled.Text`
  font-family: Comfortaa-Regular;
  color: #C8C8C8;
`;

export const TypeValue = styled.Text`
  font-family: Comfortaa-Bold;
  font-size: 16px;
  color: #FFF;
`;
