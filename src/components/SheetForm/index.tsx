import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../FormBasicComponents/';
import Input from '../Input';
import { FieldType } from '../../utils';
import { AccountController } from '../../controllers';
import { ApplicationState } from '../../../core/lib/adapters/redux/store';

import { Container } from './styles';

const SheetForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  
  const token = useSelector<ApplicationState, string>(state => state.credentials.token);
  const navigation = useNavigation();

  const accountController = AccountController.getInstance();

  async function handleCreate() {
    await (accountController.create(name, description, +amount, token)).then(account => {
      if (account.data == undefined) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar registrar a conta, tente novamente!', [
          { style: "cancel" }
        ]);
        return;
      }
      navigation.navigate('Main', { newAccount: account.data });
      console.log('data', account.data);
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <Container>
      <Input 
        name="Nome"
        value={name}
        onChangeText={name => setName(name)}
        focus={true}
        type={FieldType.TEXT} />

      <Input 
        name="Descrição"
        value={description}
        onChangeText={description => setDescription(description)}
        type={FieldType.TEXT} />
      
      <Input 
        name="Valor R$"
        value={amount}
        includeRawValueInChangeText={true}
        onChangeText={(amount, rawAmount) => setAmount(rawAmount)}
        type={FieldType.MONEY} />

      <Button 
        name="Registrar" 
        onPress={handleCreate} />

    </Container>
  );
}

export default SheetForm;