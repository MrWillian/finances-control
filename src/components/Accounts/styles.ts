import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Glegoo';
  font-size: 18px;
  color: #C8C8C8;
  margin-bottom: 10px;
`;

export const AccountsContainer = styled.View`
  flex: 1;
  margin: 5px 0;
  padding: 30px;
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
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 10px 0;
  padding: 30px;
`;

export const BillsTitle = styled.Text`
  font-family: 'Glegoo';
  font-size: 18px;
  color: #C8C8C8;
`;

export const BillsScroll = styled.ScrollView`
  margin: 20px 0;
`;
