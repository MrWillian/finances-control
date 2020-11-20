import React, { useEffect } from 'react';
import Loading from '../../components/Loading';
import { iNavigationProps } from '../../utils';
import { BackgroundGradient } from '../../components/Gradients';

import { StorageController } from '../../controllers';

import { Container } from './styles';

const Splash: React.FC<iNavigationProps> = ({ navigation }) => {
  let storageController = new StorageController();

  useEffect(() => {
    const getUserStorage: any = async () => {
      const user = await storageController.getItem('@finances/user');
      if (user === null) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('MainStack');
      }
    }
    getUserStorage();
  }, []);

  return (
    <BackgroundGradient>
      <Container>
        <Loading />
      </Container>
    </BackgroundGradient>
  );
}

export default Splash;
