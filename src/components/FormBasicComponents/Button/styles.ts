import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  background: #6269F1;
  border-radius: 5px;
  margin-top: 10px;
  width: 120px;
  height: 40px;

  elevation: 20;
`;

export const Label = styled.Text`
  font-family: 'Glegoo';
  font-size: 18px;
  color: #FDFDFD;

  text-transform: uppercase;
`;
