import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TextInput } from './styles';

interface Props {
  name?: string;
  icon: string;
  value?: string;
  onChangeText(operation: any): any;
}

const Input: React.FC<Props> = ({ name, icon, value, onChangeText }) => {
  return (
    <Container>
      <Icon name={icon} size={30} color="#2D142C" />
      <TextInput value={value} placeholder={name} onChangeText={onChangeText} />
    </Container>
  );
}

export default Input;