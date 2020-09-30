import React from 'react';

import { Container, Label } from './styles';

interface Props {
  route: string;
  navigation: any
}

const BottomInfoLink: React.FC<Props> = ({ 
  route, navigation, children 
}) => {

  const navigateToRoute = () => {
    navigation.navigate(route);
  }

  return (
    <Container onPress={navigateToRoute}>
      <Label>
        {children}
      </Label>
    </Container>
  );
}

export default BottomInfoLink;
