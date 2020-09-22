import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  height: 30%;
`;

export const ProgressBar = styled.View`
  border-radius: 50px;
  background: #FFF;

  width: 80%;
  height: 5%;
  margin-top: 20px;
  elevation: 15;
`;

export const ProgressBarLine = styled.View`
  width: 65%;
  height: 80%;
  margin-top: 1px;
  border-radius: 50px;
  background-color: #FFD700;
`;

export const Label = styled.Text`
  color: #FFD700;
  align-self: center;
  margin-top: 10px;
`;

export const Image = styled.Image`
  flex: 1;
`;
