import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <TouchableOpacity>
        <Icon name="sort" size={25} color="#FFD700" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="person" size={25} color="#FFD700" />
      </TouchableOpacity>
    </Container>
  );
}

export default Header;
