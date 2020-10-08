import React, { useState } from 'react';
import { Alert } from 'react-native';

import Input from '../../components/Input';
import { SimpleForm, Title, Button} from '../../components/FormBasicComponents';
import { BottomInfo, BottomInfoText, BottomInfoLink } from '../../components/BottomInfoComponents';

import { iNavigationProps, FieldType, CapitalizeType } from '../../utils';

import { AuthController, StorageController } from '../../controllers';

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
      console.log(phoneNumber.replace('(', '').replace(')', '').replace(' ', '').replace('-', ''));
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

        <Input 
          name="Nome" 
          value={name} 
          icon="person" 
          onChangeText={name => setName(name)}
          type={FieldType.TEXT}
          focus={true} />

        <Input 
          name="Email" 
          value={email} 
          icon="mail" 
          onChangeText={email => setEmail(email)}
          type={FieldType.TEXT}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize={CapitalizeType.NONE}
          autoCorrect={false}
          autoCompleteType='email' />

        <Input 
          name="Telefone" 
          value={phoneNumber} 
          icon="call" 
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          type={FieldType.PHONENUMBER} />

        <Input 
          name="Senha" 
          value={password} 
          icon="lock-closed" 
          onChangeText={password => setPassword(password)}
          type={FieldType.PASSWORD} />
        
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
