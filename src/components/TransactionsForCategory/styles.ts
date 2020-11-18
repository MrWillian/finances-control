import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LinkToAll = styled.TouchableOpacity`
  width: 18%;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: #222f52;
  border-radius: 25px;
  padding: 5px;
`;

export const Label = styled.Text`
  font-family: Comfortaa-Medium;
  font-size: 12px;
  color: #C8C8C8;
`;

export const TransactionsForCategoryCard = styled.View`
  flex: 1;
  margin: 10px 0 0 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryIcon = styled.View``;

export const CategoryName = styled.Text`
  font-family: Comfortaa-Bold;
  font-size: 14px;
  color: #C8C8C8;
`;

export const CategoryValue = styled.Text`
  font-family: Comfortaa-Bold;
  font-size: 12px;
  color: #FFF;
`;
