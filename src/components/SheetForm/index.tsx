import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../FormBasicComponents/';
import Input from '../Input';
import { FieldType } from '../../utils';

import { AccountController, StorageController } from '../../controllers';

import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

const SheetForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [token, setToken] = useState('');
  const navigation = useNavigation();

  let accountController: AccountController = new AccountController(token);
  let storageController = new StorageController();

  useEffect(() => {  
    getTokenStorage();
    
    if (token !== '') 
      accountController = new AccountController(token);
  }, []);
  
  const getTokenStorage: any = async () => setToken((await storageController.getItem('@finances/user'))['access_token']);

  async function handleCreate() {
    await (accountController.create(name, description, +amount, token)).then(account => {
      if (account.data == undefined) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar registrar a conta, tente novamente!', [
          { style: "cancel" }
        ]);
        return;
      }
      navigation.navigate('Main');
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