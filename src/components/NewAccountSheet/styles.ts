import styled from 'styled-components/native';

interface Props {
  windowHeight: number;
  windowWidth: number;
}

export const BottomSheetContent = styled.View<Props>`
  display: flex;
  align-self: flex-end;
  position: relative;

  background-color: rgba(0,0,0,0.80);
  padding: 30px 20px;
  height: ${props => (props.windowHeight / 2)}px;
  width: ${props => props.windowWidth}px;
`;

export const BottomSheetTitle = styled.Text`
  color: #FFF;
`;

export const NewAccountFAB = styled.TouchableOpacity`
  align-self: center;
  position: absolute;

  width: 50px;
  height: 50px;
  border-radius: 50px;

  background-color: #C4C4C4;
  top: -15px;
`;

export const Indicator = styled.TouchableOpacity`
  align-self: center;
  position: absolute;
  top: 5px;

  width: 40px;
  height: 2px;
  border-radius: 50px;

  background-color: #C4C4C4;
`;
