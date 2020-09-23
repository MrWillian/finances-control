import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TextInput } from './styles';

interface Props {
  name ?: string;
  icon : string;
}

const Input: React.FC<Props> = ({ name, icon }) => {
  return (
    <Container>
      <Icon name={icon} size={30} color="#2D142C" />
      <TextInput placeholder={name} />
    </Container>
  );
}

export default Input;