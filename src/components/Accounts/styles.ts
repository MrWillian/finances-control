import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 30px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: 'Glegoo';
  font-weight: 700;
  color: #FFF;
`;

export const AccountsContainer = styled.View`
  margin: 10px 0;
`;

export const AccountCard = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #FFF;

  margin: 5px 0;
  padding: 20px;
  border-radius: 5px;

  elevation: 20;
`;

export const AccountTitle = styled.Text`
  font-family: 'Glegoo';
`;

export const PlusButtonContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  background-color: #FFD700;

  width: 25px;
  height: 25px;
  margin: 10px 0;
  border-radius: 25px;
  elevation: 20;
`;

export const BillsContainer = styled.View`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const BillsTitle = styled.Text`
  font-family: 'Glegoo';
  font-size: 14px;
  color: #FFF;
`;

export const BillsScroll = styled.ScrollView`
  margin: 20px 0;
`;

export const BillsCard = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 10px;
  padding: 20px;

  background-color: #FFF;
  border-radius: 5px;

  elevation: 20;
`;

export const BillsCardTitle = styled.Text`
  font-family: 'Glegoo';
  font-size: 12px;
  color: #000;
`;

export const BillsCardValuePositive = styled.Text`
  font-family: 'Glegoo';
  color: green;
`;

export const BillsCardValueNegative = styled.Text`
  font-family: 'Glegoo';
  color: red;
`;
