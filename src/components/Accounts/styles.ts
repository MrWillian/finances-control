import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Comfortaa-Medium';
  font-size: 18px;
  color: #FDFDFD;
  margin-bottom: 10px;
`;

export const AccountsContainer = styled.View`
  flex: 1;
  padding: 20px 30px;
`;

export const PlusButtonContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  background-color: #6269F1;

  width: 25px;
  height: 25px;
  margin: 10px 0;
  border-radius: 25px;
  elevation: 10;
`;

export const BillsContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 10px 30px;
`;

export const BillsTitle = styled.Text`
  font-family: 'Comfortaa-Medium';
  font-size: 18px;
  color: #FDFDFD;
`;

export const BillsScroll = styled.ScrollView`
  margin: 10px 0;
`;
