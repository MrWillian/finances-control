import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

interface Props {
  onPress(): void;
}

const PlusButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Icon name="add" size={20} color="#FFF" />
    </Container>
  );
}

export default PlusButton;