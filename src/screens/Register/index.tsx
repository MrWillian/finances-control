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

import { Container } from './styles';

const Register: React.FC<iNavigationProps> = ({ navigation }) => {
  const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Title>Crie sua conta...</Title>
      <SimpleForm>
        <Input name="Nome" value={name} icon="person" onChangeText={name => setName(name)} />
        <Input name="Email" value={email} icon="mail" onChangeText={email => setEmail(email)} />
        <Input 
          name="Telefone" 
          value={phoneNumber} 
          icon="call" 
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          isPhoneNumber={true} />
        <Input 
          name="Senha" 
          value={password} 
          icon="lock-closed" 
          onChangeText={password => setPassword(password)}
          secureTextEntry={true} />
        
        {/* <Button name="Cadastrar" /> */}

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
