import React from 'react';

import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';

import { iNavigationProps } from '../../utils';

const Settings: React.FC<iNavigationProps> = ({navigation}) => {
  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <MenuBottom activePage={'Settings'} />
    </BackgroundGradient>
  );
}

export default Settings;
