import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 10px 0;
  padding-left: 20px;

  background: #FFF;
  border-radius: 10px;
  min-width: 80%;
  elevation: 20;
`;

export const TextInput = styled.TextInput`
  font-family: 'Glegoo';
  font-weight: 700;
  font-size: 18px;

  color: #2D142C;

  margin-left: 10px;
`;