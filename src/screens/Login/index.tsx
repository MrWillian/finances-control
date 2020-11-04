import React, { useEffect } from 'react';

import { Title } from '../../components/FormBasicComponents';
import { BottomInfo, BottomInfoText, BottomInfoLink } from '../../components/BottomInfoComponents';
import { BackgroundGradient } from '../../components/Gradients';
import LoginForm from '../../components/LoginForm';

import { iNavigationProps } from '../../utils';
import { StorageController } from '../../controllers';

import { Container } from './styles';

const Login: React.FC<iNavigationProps> = ({ navigation }) => {
  let storageController = new StorageController();

  useEffect(() => {
    const getUserStorage: any = async () => {
      const user = await storageController.getItem('@finances/user');
      if (!(user === undefined || user === null)) 
        navigation.navigate('MainStack');
    }
    getUserStorage();
  }, []);

  return (
    <BackgroundGradient>
      <Container>
        <Title>Faça login com seu email e senha...</Title>

        <LoginForm navigation={navigation} />

        <BottomInfo>
          <BottomInfoText>Não tem uma conta?</BottomInfoText>
          <BottomInfoLink navigation={navigation} route="Register">
            Criar!
          </BottomInfoLink>
        </BottomInfo>
      </Container>
    </BackgroundGradient>
  );
}

export default Login;
