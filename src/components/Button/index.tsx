import React from 'react';

import { Container, Label } from './styles';

interface Props {
  name ?: string;
  onPress(): any;
}

const Button: React.FC<Props> = ({ name, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Label>{name}</Label>
    </Container>
  );
}

export default Button;