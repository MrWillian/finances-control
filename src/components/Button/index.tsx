import React from 'react';

import { Container, Label } from './styles';

interface Props {
  name ?: string;
  route: string;
  navigation: any;
}

const Button: React.FC<Props> = ({ name, route, navigation }) => {
  
  const navigateToRoute = () => {
    navigation.navigate(route);
  }

  return (
    <Container onPress={navigateToRoute}>
      <Label>{name}</Label>
    </Container>
  );
}

export default Button;