import React, { useState } from 'react';
import { Button } from '../FormBasicComponents/';
import Input from '../Input';
import { FieldType } from '../../utils';

import { Container } from './styles';

const SheetForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

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
        value={value}
        onChangeText={value => setValue(value)}
        type={FieldType.MONEY} />

      <Button 
        name="Registrar" 
        onPress={() => console.log('Teste')} />
    </Container>
  );
}

export default SheetForm;