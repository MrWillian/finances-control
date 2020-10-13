import React, { useEffect } from 'react';
import Accounts from '../../components/Accounts';
import Header from '../../components/Header';

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
    <Container>
      <Header navigation={navigation} />
      <Accounts />
    </Container>
  );
}

export default Main;
