import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { CredentialsTypes } from '../../../core/lib/adapters/redux/store/ducks/credentials/types';
import Input from '../../components/Input';
import { SimpleForm, Title, Button } from '../../components/FormBasicComponents';
import { BottomInfo, BottomInfoText, BottomInfoLink } from '../../components/BottomInfoComponents';
import { BackgroundGradient } from '../../components/Gradients';

import { iNavigationProps, FieldType, CapitalizeType } from '../../utils';
import { AuthController, StorageController } from '../../controllers';

import { Container } from './styles';

const Login: React.FC<iNavigationProps> = ({ navigation }) => {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  let authController = new AuthController();
  let storageController = new StorageController();

  useEffect(() => {
    const getUserStorage: any = async () => {
      const user = await storageController.getItem('@finances/user');
      if (!(user === undefined || user === null)) 
        navigation.navigate('MainStack');
    }
    getUserStorage();
  }, []);

  async function handleLogin() {
    setIsLoading(true);

    await (authController.login(email, password)).then(user => {
      if (user.data == undefined) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login, tente novamente!', [
          { style: "cancel" }
        ]);
        setIsLoading(false);
        return;
      }
      storageController.setItem('@finances/user', user.data);
      dispatch({ type: CredentialsTypes.SET_TOKEN, token: user.data.access_token });
      setIsLoading(false);
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

          <Button name="Entrar" isLoading={isLoading} onPress={handleLogin} />
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