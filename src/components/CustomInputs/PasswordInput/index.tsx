import React from 'react';
import { Input } from '../../Input/styles';
import { iCustomInputProps } from '../../../utils';

const PasswordInput: React.FC<iCustomInputProps> = ({ 
  name, value, onChangeText, onBlur, focus, showPassword
}) => {
  return (
    <Input 
      placeholder={name} 
      autoFocus={focus} 
      value={value} 
      onChangeText={onChangeText} 
      onBlur={onBlur}
      secureTextEntry={showPassword} />
  );
}

export default PasswordInput;
