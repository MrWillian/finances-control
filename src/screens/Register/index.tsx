import React from 'react';

import SimpleForm from '../../components/SimpleForm';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Button from '../../components/Button';
import BottomInfo from '../../components/BottomInfo';
import BottomInfoText from '../../components/BottomInfoText';
import BottomInfoLink from '../../components/BottomInfoLink';

import { iNavigationProps } from '../../utils/iNavigationProps';

import { Container } from './styles';

const Register: React.FC<iNavigationProps> = ({ navigation }) => {
  return (
    <Container>
      <Title>Crie sua conta...</Title>
      <SimpleForm>
        <Input name="Nome" icon="person" />
        <Input name="Email" icon="mail" />
        <Input name="Telefone" icon="phone" />
        <Input name="Senha" icon="lock" />
        <Button name="Cadastrar" route="MainStack" navigation={navigation} />
      </SimpleForm>
      <BottomInfo>
        <BottomInfoText>
          Já tem uma conta?
        </BottomInfoText>
        <BottomInfoLink navigation={navigation} route="Login">
          Entrar!
        </BottomInfoLink>
      </BottomInfo>
    </Container>
  );
}

export default Register;
