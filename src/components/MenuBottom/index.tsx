import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {default as OctIcon}  from 'react-native-vector-icons/Octicons';

import { Container, MenuButton, MenuButtonContainer, MenuButtonLabel } from './styles';

const MenuBottom: React.FC = () => {
  return (
    <Container>
      <MenuButton>
        <MenuButtonContainer>
          <Icon style={{elevation: 10}} name="stats-chart" size={20} color="#91A0D0" />
          <MenuButtonLabel>Estatísticas</MenuButtonLabel>
        </MenuButtonContainer>
      </MenuButton>

      <MenuButton>
        <MenuButtonContainer>
          <Icon style={{elevation: 10}} name="home" size={20} color="#91A0D0" />
          <MenuButtonLabel>Início</MenuButtonLabel>
        </MenuButtonContainer>
      </MenuButton>

      <MenuButton>
        <MenuButtonContainer>
          <OctIcon style={{elevation: 10}} name="settings" size={20} color="#91A0D0" />
          <MenuButtonLabel>Configurações</MenuButtonLabel>
        </MenuButtonContainer>
      </MenuButton>
    </Container>
  );
}

export default MenuBottom;
