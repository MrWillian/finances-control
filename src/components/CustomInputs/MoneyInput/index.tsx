import React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { iCustomInputProps } from '../iCustomInputProps';

const MoneyInput: React.FC<iCustomInputProps> = ({ 
  name, value, onChangeText, focus
}) => {
  return (
    <TextInputMask
      style={{marginLeft: 10}}
      placeholder={name} 
      type={'money'}
      options={{
        precision: 2,
        separator: ',',
        delimiter: '.',
        unit: 'R$ ',
        suffixUnit: ''
      }}
      value={value}
      onChangeText={onChangeText}
      autoFocus={focus} />
  );
}

export default MoneyInput;