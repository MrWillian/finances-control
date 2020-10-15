import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  flex: 0.1;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.0);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const MenuButton = styled.TouchableWithoutFeedback`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const MenuButtonLabel = styled.Text`
  color: #91A0D0;
  font-size: 10px;
  font-family: 'Comfortaa-Medium';
`;
