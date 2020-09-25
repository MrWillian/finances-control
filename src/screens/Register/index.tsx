import React, { useState } from 'react';
import { Alert } from 'react-native';

import SimpleForm from '../../components/SimpleForm';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Button from '../../components/Button';
import BottomInfo from '../../components/BottomInfo';
import BottomInfoText from '../../components/BottomInfoText';
import BottomInfoLink from '../../components/BottomInfoLink';

import { iNavigationProps } from '../../utils/iNavigationProps';
import AuthController from '../../controllers/AuthController';
import StorageController from '../../controllers/StorageController';

import { Container } from './styles';

const Register: React.FC<iNavigationProps> = ({ navigation }) => {
  const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  let authController = new AuthController();
  let storageController = new StorageController();
  
  async function handleRegister() {
    await (authController.register(name, email, phoneNumber, password)).then(user => {
      if (user.data == undefined) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar se registrar, tente novamente!', [
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
      <Title>Crie sua conta...</Title>
      <SimpleForm>
        <Input name="Nome" value={name} icon="person" onChangeText={name => setName(name)} />
        <Input name="Email" value={email} icon="mail" onChangeText={email => setEmail(email)} />
        <Input name="Telefone" value={phoneNumber} icon="phone" onChangeText={phoneNumber => setPhoneNumber(phoneNumber)} />
        <Input name="Senha" value={password} icon="lock" onChangeText={password => setPassword(password)} />
        
        <Button name="Cadastrar" onPress={handleRegister} />

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
