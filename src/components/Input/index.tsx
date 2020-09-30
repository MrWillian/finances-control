import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInputMask } from 'react-native-masked-text';

import { Container, TextInput } from './styles';

interface Props {
  name: string;
  icon?: string;
  value: string;
  onChangeText(operation: any): any;
  secureTextEntry?: boolean;
  isPhoneNumber?: boolean;
  focus?: boolean;
}

const Input: React.FC<Props> = ({ 
  name, icon, value, onChangeText, secureTextEntry, isPhoneNumber, focus
}) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const changeShowPasswordIcon = () => {
    setShowPassword(!showPassword);
  }

  return (
    <Container>
      {icon ? 
        <Icon name={icon} size={30} color="#2D142C" />
        : <></>
      }
      {!isPhoneNumber
        ? (<TextInput 
            placeholder={name} 
            autoFocus={focus}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={showPassword} />)
        : 
        (<TextInputMask
          style={{marginLeft: 10}}
          placeholder={name} 
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          value={value}
          onChangeText={onChangeText} />)
      }

      {!secureTextEntry ? 
        <></>
        : (<Icon 
            name={showPassword ? 'eye' : 'eye-off'} 
            size={30} 
            color="#2D142C"
            onPress={changeShowPasswordIcon} />)
      }
    </Container>
  );
}

export default Input;