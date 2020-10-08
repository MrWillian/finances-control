import React from 'react';
import { Input } from '../../Input/styles';
import { iCustomInputProps } from '../../../utils';

const TextInput: React.FC<iCustomInputProps> = ({ 
  name, value, onChangeText, focus, autoCapitalize
}) => {
  return (
    <Input 
      placeholder={name} 
      autoFocus={focus} 
      value={value} 
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize} />
  );
}

export default TextInput;
