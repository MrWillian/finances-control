import React from 'react';
import { Input } from '../../Input/styles';
import { iCustomInputProps } from '../iCustomInputProps';

const PasswordInput: React.FC<iCustomInputProps> = ({ 
  name, value, onChangeText, focus, showPassword
}) => {
  return (
    <Input 
      placeholder={name} 
      autoFocus={focus} 
      value={value} 
      onChangeText={onChangeText} 
      secureTextEntry={showPassword} />
  );
}

export default PasswordInput;
