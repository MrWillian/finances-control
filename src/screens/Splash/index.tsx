import React, { useEffect } from 'react';
import Loading from '../../components/Loading';
import { iNavigationProps } from '../../utils';

import { StorageController } from '../../controllers';

import { Container } from './styles';
import { BackgroundGradient } from '../../components/Gradients';

const Splash: React.FC<iNavigationProps> = ({ navigation }) => {
  let storageController = new StorageController();

  useEffect(() => {
    const getUserStorage: any = async () => {
      const user = await storageController.getItem('@finances/user');
      console.log(user === null);
      if (user === null) {
        navigation.navigate('Login');
      } else {
        console.log('entrou');

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
