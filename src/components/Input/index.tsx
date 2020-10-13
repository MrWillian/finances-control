import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { TextInput, PasswordInput, MoneyInput, PhoneInput } from '../CustomInputs';
import { iCustomInputProps, FieldType } from '../../utils';

import { Container } from './styles';

const Input: React.FC<iCustomInputProps> = ({ 
  name, icon, value, onChangeText, focus, type, includeRawValueInChangeText, autoCapitalize,
  textContentType, keyboardType, autoCorrect, autoCompleteType
}) => {
  const secureTextEntry = type === FieldType.PASSWORD;
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const changeShowPasswordIcon = () => { setShowPassword(!showPassword); }

  const getInputForType = () => {
    switch(type) {
      case FieldType.TEXT:
        return <TextInput name={name} value={value} onChangeText={onChangeText} focus={focus} 
                autoCapitalize={autoCapitalize} textContentType={textContentType} keyboardType={keyboardType}
                autoCorrect={autoCorrect} autoCompleteType={autoCompleteType} />;

      case FieldType.PASSWORD:
        return <PasswordInput name={name} value={value} onChangeText={onChangeText} focus={focus}
                showPassword={showPassword} autoCapitalize={autoCapitalize} />;

      case FieldType.PHONENUMBER:
        return <PhoneInput name={name} value={value} onChangeText={onChangeText} focus={focus} />;

      case FieldType.MONEY:
        return <MoneyInput name={name} value={value} onChangeText={onChangeText} focus={focus} 
                includeRawValueInChangeText={includeRawValueInChangeText} />;
      default: 
        return;
    }
  }

  return (
    <Container>
      {icon ? <Icon name={icon} size={30} color="#2D142C" /> : <></>}

      {getInputForType()}

      {!secureTextEntry ? <></>
        : <Icon style={{ marginRight: 20 }} name={showPassword ? 'eye' : 'eye-off'}  size={30}  color="#2D142C" onPress={changeShowPasswordIcon} />
      }
    </Container>
  );
}

export default Input;