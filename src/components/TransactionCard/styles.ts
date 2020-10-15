import styled from 'styled-components/native';

interface ValueColor {
  color?: string;
}

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;

  border-radius: 5px;
`;

export const Title = styled.Text`
  font-family: 'Comfortaa-Medium';
  font-size: 12px;
  color: #FFF;
  elevation: 10;
  margin: 2px 0;
`;

export const Value = styled.Text<ValueColor>`
  font-family: 'Comfortaa-Bold';
  font-weight: bold;
  font-size: 12px;
  color: ${props => props.color};
`;
