import React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { iCustomInputProps } from '../../../utils';

const DateTimeInput: React.FC<iCustomInputProps> = ({ 
  name, value, onChangeText, onBlur, focus, includeRawValueInChangeText
}) => {
  return (
    <TextInputMask
      style={{marginLeft: 10}}
      placeholder={name} 
      type={'datetime'}
      options={{
        format: 'DD/MM/YYYY HH:mm'
      }}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      includeRawValueInChangeText={includeRawValueInChangeText}
      autoFocus={focus} />
  );
}

export default DateTimeInput;
