import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 30px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: 'Glegoo';
  font-size: 18px;
  color: #C8C8C8;
`;

export const AccountsContainer = styled.View`
  margin: 10px 0;
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
  font-size: 18px;
  color: #C8C8C8;
`;

export const BillsScroll = styled.ScrollView`
  margin: 10px 0;
`;
