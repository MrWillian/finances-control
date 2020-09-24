import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

interface Props {
  navigation ?: any;
}

const Header: React.FC<Props> = ({ navigation }) => {
  
  const openDrawer = () => {
    navigation.openDrawer();
  }

  return (
    <Container>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="sort" size={25} color="#FFD700" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="person" size={25} color="#FFD700" />
      </TouchableOpacity>
    </Container>
  );
}

export default Header;
