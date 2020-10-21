import React, { useEffect } from 'react';

import Accounts from '../../components/Accounts';
import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';

import { StorageController } from '../../controllers';

import { iNavigationProps } from '../../utils/';

import { Container } from './styles';

const Main: React.FC<iNavigationProps> = ({ navigation }) => {
  let storageController = new StorageController();

  useEffect(() => {
    const getUserStorage: any = async () => {
      // console.log('MAIN', await storageController.getItem('@finances/user'));
    }
    getUserStorage();
  }, []);

  return (
    <BackgroundGradient>
      <Container>
        <Header navigation={navigation} />
        <Accounts />
      </Container>

      <MenuBottom activePage={'Main'} />
    </BackgroundGradient>
  );
}

export default Main;
