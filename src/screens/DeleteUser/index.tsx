import React from 'react';
import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';
import { iNavigationProps } from '../../utils';

import { Content } from './styles';

const DeleteUser: React.FC<iNavigationProps> = ({navigation}) => {
  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <Content>
        
      </Content>

      <MenuBottom activePage={'Settings'} />
    </BackgroundGradient>
  );
}

export default DeleteUser;
