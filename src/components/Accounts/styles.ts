import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  padding: 10px 30px;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BillsContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

export const Title = styled.Text`
  font-family: 'Comfortaa-Medium';
  font-size: 18px;
  color: #FDFDFD;
`;

export const BillsScroll = styled.ScrollView`
  margin: 10px 0;
`;
