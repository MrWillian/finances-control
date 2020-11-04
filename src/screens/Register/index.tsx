import React from 'react';

import RegisterForm from '../../components/RegisterForm';
import { Title } from '../../components/FormBasicComponents';
import { BottomInfo, BottomInfoText, BottomInfoLink } from '../../components/BottomInfoComponents';
import { BackgroundGradient } from '../../components/Gradients';

import { iNavigationProps } from '../../utils';

import { Container } from './styles';

const Register: React.FC<iNavigationProps> = ({ navigation }) => { 
  return (
    <BackgroundGradient>
      <Container>
        <Title>Crie sua conta...</Title>
        
        <RegisterForm navigation={navigation} />

        <BottomInfo>
          <BottomInfoText>
            Já tem uma conta?
          </BottomInfoText>
          <BottomInfoLink navigation={navigation} route="Login">
            Entrar!
          </BottomInfoLink>
        </BottomInfo>
      </Container>
    </BackgroundGradient>
  );
}

export default Register;
