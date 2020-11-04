import React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { iCustomInputProps } from '../../../utils';

const MoneyInput: React.FC<iCustomInputProps> = ({ 
  name, value, onChangeText, onBlur, focus, includeRawValueInChangeText
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
      onBlur={onBlur}
      includeRawValueInChangeText={includeRawValueInChangeText}
      autoFocus={focus} />
  );
}

export default MoneyInput;
