import React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { iCustomInputProps } from '../iCustomInputProps';

const PhoneInput: React.FC<iCustomInputProps> = ({ 
  name, value, onChangeText, focus
}) => {
  return (
    <TextInputMask
      style={{marginLeft: 10}}
      placeholder={name} 
      type={'cel-phone'}
      options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(99) '
      }}
      value={value}
      onChangeText={onChangeText}
      autoFocus={focus} />
  );
}

export default PhoneInput;