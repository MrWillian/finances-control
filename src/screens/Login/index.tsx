import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import Input from '../../components/Input';
import { SimpleForm, Title, Button } from '../../components/FormBasicComponents';
import { BottomInfo, BottomInfoText, BottomInfoLink } from '../../components/BottomInfoComponents';

import { iNavigationProps, FieldType, CapitalizeType } from '../../utils';
import { AuthController, StorageController } from '../../controllers';

import { Container } from './styles';
import { BackgroundGradient } from '../../components/Gradients';

const Login: React.FC<iNavigationProps> = ({ navigation }) => {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let authController = new AuthController();
  let storageController = new StorageController();

  useEffect(() => {
    const getUserStorage: any = async () => {
      const user = await storageController.getItem('@finances/user'); 
      if (!(user === undefined)) {
        navigation.navigate('MainStack');
      }

    }

    getUserStorage();
  }, []);

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
    <BackgroundGradient>
      <Container>
        <Title>Faça login com seu email e senha...</Title>
        <SimpleForm>
          <Input 
            name="Email" 
            value={email} 
            icon="mail" 
            onChangeText={(email: any) => setEmail(email)}
            focus={true}
            type={FieldType.TEXT}
            textContentType='emailAddress'
            keyboardType='email-address'
            autoCapitalize={CapitalizeType.NONE}
            autoCorrect={false}
            autoCompleteType='email' />
            
          <Input 
            name="Senha" 
            value={password}  
            icon="lock-closed" 
            onChangeText={(password: any) => setPassword(password)}
            type={FieldType.PASSWORD} />

          <Button name="Entrar" onPress={handleLogin} />
        </SimpleForm>

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