import styled from 'styled-components/native';

interface MenuButtonProps {
  isActive?: boolean;
}

export const MenuButton = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuButtonContainer = styled.View<MenuButtonProps>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  
  border-bottom-width: ${props => props.isActive ? 2 : 0}px;
  border-bottom-color: #6269F1;
`;

export const MenuButtonLabel = styled.Text`
  color: #91A0D0;
  font-size: 11px;
  font-family: 'Comfortaa-Bold';
  elevation: 5;
`;
