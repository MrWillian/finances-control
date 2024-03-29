import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { TextInput, PasswordInput, MoneyInput, PhoneInput, DateTimeInput } from '../CustomInputs';
import { iCustomInputProps, FieldType } from '../../utils';

import { Container } from './styles';

export const Input: React.FC<iCustomInputProps> = ({ 
  name, icon, value, onChangeText, onBlur, focus, type, includeRawValueInChangeText, ref,
  autoCapitalize, textContentType, keyboardType, autoCorrect, autoCompleteType, containerStyle, style
}) => {
  const secureTextEntry = type === FieldType.PASSWORD;
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const changeShowPasswordIcon = () => { setShowPassword(!showPassword); }

  const getInputForType = () => {
    switch(type) {
      case FieldType.TEXT:
        return (<TextInput 
          name={name} value={value} onChangeText={onChangeText} focus={focus} 
          onBlur={onBlur} autoCapitalize={autoCapitalize} textContentType={textContentType} 
          keyboardType={keyboardType} autoCorrect={autoCorrect} autoCompleteType={autoCompleteType} />)

      case FieldType.PASSWORD:
        return (<PasswordInput 
          name={name} value={value} onChangeText={onChangeText} focus={focus}
          onBlur={onBlur} showPassword={showPassword} autoCapitalize={autoCapitalize} />)

      case FieldType.PHONENUMBER:
        return (<PhoneInput 
          name={name} value={value} style={style} onChangeText={onChangeText} onBlur={onBlur} focus={focus} />)

      case FieldType.MONEY:
        return (<MoneyInput 
          name={name} value={value} onChangeText={onChangeText} onBlur={onBlur} focus={focus} 
          includeRawValueInChangeText={includeRawValueInChangeText} />)
      
      case FieldType.DATETIME:
        return (<DateTimeInput 
          name={name} value={value} onChangeText={onChangeText} onBlur={onBlur} focus={focus} 
          includeRawValueInChangeText={includeRawValueInChangeText} ref={ref} />)

      default: 
        return;
    }
  }

  return (
    <Container style={[{marginTop: 10, marginBottom: 10, paddingLeft: 20}, containerStyle]}>
      {icon ? <Icon name={icon} size={25} color="#2D142C" /> : <></>}

      {getInputForType()}

      {!secureTextEntry ? <></>
        : <Icon style={{ marginRight: 20 }} name={showPassword ? 'eye' : 'eye-off'}  size={30}  color="#2D142C" onPress={changeShowPasswordIcon} />
      }
    </Container>
  );
}
