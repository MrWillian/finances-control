import React from 'react';

import { MenuBottomGradient } from '../Gradients';
import MenuBottomButton from '../MenuBottomButton';

import { Container } from './styles';

interface Props {
  activePage?: string;
}

const MenuBottom: React.FC<Props> = ({ activePage }) => {
  return (
    <Container>
      <MenuBottomGradient>
        <MenuBottomButton screen="Stats" isActive={activePage === 'Stats'} iconName="stats-chart" />
        <MenuBottomButton screen="Main" isActive={activePage === 'Main'} iconName="home" />
        <MenuBottomButton screen="Settings" isActive={activePage === 'Settings'} iconName="settings" />
      </MenuBottomGradient>
    </Container>
  );
}

export default MenuBottom;
