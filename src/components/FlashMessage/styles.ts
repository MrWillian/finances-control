import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const height = Dimensions.get('window').height;

export const Container = styled.View`
  position: absolute; 
  background-color: green;
  justify-content: center; 
  align-items: center;  
  height: 50px;
  width: 100%;
  bottom: ${height - 405}px;
`;

export const Message = styled.Text`
  color: #FFF;
  font-family: Comfortaa-Medium;
`;
