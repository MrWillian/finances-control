import React from 'react';

import SimpleForm from '../../components/SimpleForm';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import BottomInfo from '../../components/BottomInfo';
import BottomInfoText from '../../components/BottomInfoText';
import BottomInfoLink from '../../components/BottomInfoLink';

import { iNavigationProps } from '../../utils/iNavigationProps';

import { Container } from './styles';

const Login: React.FC<iNavigationProps> = ({ navigation }) => {
  return (
    <Container>
      <Title>Faça login com seu email e senha...</Title>
      <SimpleForm>
        <Input name="Email" icon="mail" />
        <Input name="Senha" icon="lock" />
        <Button name="Entrar" />
      </SimpleForm>
      <BottomInfo>
        <BottomInfoText>Não tem uma conta?</BottomInfoText>
        <BottomInfoLink navigation={navigation} route="Register">
          Criar!
        </BottomInfoLink>
      </BottomInfo>
    </Container>
  );
}

export default Login;