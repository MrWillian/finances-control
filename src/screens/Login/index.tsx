import React, { useState } from 'react';
import { Alert } from 'react-native';

import SimpleForm from '../../components/SimpleForm';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import BottomInfo from '../../components/BottomInfo';
import BottomInfoText from '../../components/BottomInfoText';
import BottomInfoLink from '../../components/BottomInfoLink';

import { iNavigationProps } from '../../utils/iNavigationProps';

import AuthController from '../../controllers/AuthController';
import StorageController from '../../controllers/StorageController';

import { Container } from './styles';

const Login: React.FC<iNavigationProps> = ({ navigation }) => {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let authController = new AuthController();
  let storageController = new StorageController();

  async function handleLogin() { 
    await (authController.login(email, password)).then(user => {
      if (user.data == undefined) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login, tente novamente!', [
          { style: "cancel" }
        ]);
        return;
      }
      storageController.setItem('@finances/user', user.data);
      navigation.navigate('MainStack');
    });
  }

  return (
    <Container>
      <Title>Faça login com seu email e senha...</Title>
      <SimpleForm>
        <Input name="Email" value={email} icon="mail" onChangeText={email => setEmail(email)} />
        <Input name="Senha" value={password} icon="lock" onChangeText={password => setPassword(password)} />
        <Button name="Entrar" onPress={handleLogin} />
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