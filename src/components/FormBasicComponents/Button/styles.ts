import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  background: #FFD700;
  border-radius: 10px;
  margin-top: 10px;
  width: 120px;
  height: 40px;

  elevation: 20;
`;

export const Label = styled.Text`
  font-family: 'Glegoo';
  font-size: 18px;
  color: #3E3E3E;

  text-transform: uppercase;
`;
