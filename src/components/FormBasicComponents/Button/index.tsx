import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Label } from './styles';

interface Props {
  name?: string;
  isLoading?: boolean;
  onPress(): any;
}

const Button: React.FC<Props> = ({ name, isLoading, onPress }) => {
  return (
    <Container onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator animating={isLoading} size="large" color="#FFF" />
      )
        : (<Label>{name}</Label>)
      }
    </Container>
  );
}

export default Button;