import React from 'react';

import { Container, Label } from './styles';

interface Props {
  name ?: string;
}

const Button: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <Label>{name}</Label>
    </Container>
  );
}

export default Button;