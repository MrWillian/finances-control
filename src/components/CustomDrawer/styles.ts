import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 40px 15px 15px 15px;

  elevation: 10;
`;

export const ItemsContainer = styled.View`
  display: flex;
`;

export const ItemButton = styled.TouchableOpacity`
  margin: 10px;
`;

export const ItemLabel = styled.Text`
  color: #97A6D7;  
  font-family: 'Comfortaa-Medium';
`;

export const Bottom = styled.View`
  margin: 10px;
  margin-top: auto;
`;

export const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LogoutButtonLabel = styled.Text`
  font-family: Comfortaa-Medium;
  color: #FFF;
  text-transform: uppercase;
  margin-left: 10px;
`;
