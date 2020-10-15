import React, { useEffect } from 'react';
import Loading from '../../components/Loading';
import { iNavigationProps } from '../../utils';

import { StorageController } from '../../controllers';

import { Container } from './styles';

const Splash: React.FC<iNavigationProps> = ({ navigation }) => {

  let storageController = new StorageController();

  useEffect(() => {
    const getUserStorage: any = async () => {
      const user = await storageController.getItem('@finances/user'); 
      if (user === undefined) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('MainStack');
      }
    }

    getUserStorage();
  }, []);

  return (
    <Container>
      <Loading />
    </Container>
  );
}

export default Splash;
