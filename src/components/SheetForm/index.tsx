import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../FormBasicComponents/';
import Input from '../Input';
import { FieldType } from '../../utils';
import { ApplicationState } from '../../../core/lib/adapters/redux/store';
import { createAccount, loadRequest } from '../../../core/lib/adapters/redux/store/ducks/accounts/actions';

import { Container } from './styles';
import { FlashMessage } from '../FlashMessage';

const SheetForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [flashMessage, setFlashMessage] = useState(false);
  
  const token = useSelector<ApplicationState, string>(state => state.credentials.token);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function handleCreate() {
    const response = dispatch(createAccount({ name, description, amount }, token));
    
    if (response.payload.data) {
      setFlashMessage(true);
      setTimeout(() => { 
        setFlashMessage(false); 
        dispatch(loadRequest());
        navigation.navigate('Main');
      }, 3000);
    }
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

      <Button name="Registrar" onPress={handleCreate} />

      {flashMessage ? <FlashMessage message={'Conta criada com sucesso...'} /> : null}

    </Container>
  );
}

export default SheetForm;
