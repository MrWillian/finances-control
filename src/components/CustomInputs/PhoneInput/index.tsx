import React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { iCustomInputProps } from '../../../utils';

const PhoneInput: React.FC<iCustomInputProps> = ({ 
  name, value, onChangeText, onBlur, focus
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
      onBlur={onBlur}
      autoFocus={focus} />
  );
}

export default PhoneInput;