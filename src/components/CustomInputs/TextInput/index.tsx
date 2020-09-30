import React from 'react';
import { Input } from '../../Input/styles';
import { iCustomInputProps } from '../iCustomInputProps';

const TextInput: React.FC<iCustomInputProps> = ({ 
  name, value, onChangeText, focus
}) => {
  return (
    <Input 
      placeholder={name} 
      autoFocus={focus} 
      value={value} 
      onChangeText={onChangeText} />
  );
}

export default TextInput;
