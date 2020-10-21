import styled from 'styled-components/native';

interface MenuButtonProps {
  isActive?: boolean;
}

export const Container = styled.View`
  position: absolute;
  flex: 0.1;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10%;
  width: 100%;
  /* background-color: rgba(27, 37, 64, 0.8); */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

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

  top: ${props => props.isActive ? -5 : 0}px;
  border-bottom-width: ${props => props.isActive ? 2 : 0}px;
  border-bottom-color: #6269F1;
`;

export const MenuButtonLabel = styled.Text`
  color: #91A0D0;
  font-size: 11px;
  font-family: 'Comfortaa-Bold';
  elevation: 5;
`;
