import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

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
        focus={true} />

      <Input 
        name="Descrição"
        value={description}
        onChangeText={description => setDescription(description)} />
      
      <Input 
        name="Valor R$"
        value={value}
        onChangeText={value => setValue(value)} />

      <Button 
        name="Registrar" 
        onPress={() => console.log('Teste')} />
    </Container>
  );
}

export default SheetForm;