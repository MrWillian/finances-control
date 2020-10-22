import React, { useEffect, useState } from 'react';

import Accounts from '../../components/Accounts';
import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';

import { StorageController } from '../../controllers';

import { iNavigationProps } from '../../utils/';

import { Container } from './styles';

const Main: React.FC<iNavigationProps> = ({ navigation }) => {
  const [token, setToken] = useState('');
  let storageController = new StorageController();

  useEffect(() => {
    const getTokenStorage: any = async () => setToken((await storageController.getItem('@finances/user'))['access_token']);
    
    getTokenStorage();
  }, []);

  return (
    <BackgroundGradient>
      <Container>
        <Header navigation={navigation} />
        <Accounts token={token} />
      </Container>

      <MenuBottom activePage={'Main'} />
    </BackgroundGradient>
  );
}

export default Main;
