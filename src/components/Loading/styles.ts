import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;

  width: 75%;
  height: 2%;
`;

export const ProgressBar = styled.View`
  border-radius: 50px;
  background: #FFF;

  elevation: 20;
`;

export const ProgressBarLine = styled.View`
  width: 65%;
  height: 80%;
  border-radius: 50px;
  background-color: #FFD700;
`;

export const Label = styled.Text`
  color: #FFD700;
  align-self: center;
  margin-top: 10px;
`;
