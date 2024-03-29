import React from 'react';
import { Input } from '../../Input/styles';
import { iCustomInputProps } from '../../../utils';

const TextInput: React.FC<iCustomInputProps> = ({ 
  name, value, onChangeText, onBlur, focus, autoCapitalize
}) => {
  return (
    <Input 
      placeholder={name} 
      autoFocus={focus} 
      value={value} 
      onChangeText={onChangeText}
      onBlur={onBlur}
      autoCapitalize={autoCapitalize} />
  );
}

export default TextInput;
