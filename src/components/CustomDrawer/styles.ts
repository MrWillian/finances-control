import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 40px 15px 15px 15px;

  background: rgba(45, 20, 44, 0.90);
  elevation: 10;
`;

export const ItemsContainer = styled.View`
  display: flex;
`;

export const ItemButton = styled.TouchableOpacity`
  margin: 10px;
`;

export const ItemLabel = styled.Text`
  color: #FFF;
  font-family: 'Glegoo';
`;

export const Bottom = styled.View`
  margin: 10px;
  margin-top: auto;
`;

export const LogoutButton = styled.TouchableOpacity`

`;

export const LogoutButtonLabel = styled.Text`
  font-family: 'Glegoo';
  font-weight: 700;
  font-size: 14px;
  color: #EE4540;
  text-decoration: underline;
`;
