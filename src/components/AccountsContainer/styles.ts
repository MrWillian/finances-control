import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const PlusButtonContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  background-color: #6269F1;

  width: 25px;
  height: 25px;
  margin: 10px 0;
  border-radius: 25px;
  elevation: 10;
`;

export const Divisor = styled.View`
  background-color: #424E71;
  height: 0.8%;
  width: 80%;

  align-self: center;
`;
