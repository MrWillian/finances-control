import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Accounts from '../../components/Accounts';
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
    <LinearGradient 
      colors={[
        '#1B2540',
        '#4B5679', 
      ]}
      style={{ flex: 1 }}>

        <Container>
          <Header navigation={navigation} />
          <Accounts />
        </Container>

      <MenuBottom />
    </LinearGradient>
  );
}

export default Main;
