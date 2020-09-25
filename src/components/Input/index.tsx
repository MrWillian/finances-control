import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, TextInput } from './styles';

interface Props {
  name?: string;
  icon: string;
  value?: string;
  onChangeText(operation: any): any;
  secureTextEntry?: boolean;
}

const Input: React.FC<Props> = ({ name, icon, value, onChangeText, secureTextEntry }) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const changeShowPasswordIcon = () => {
    setShowPassword(!showPassword);
  }

  return (
    <Container>
      <Icon name={icon} size={30} color="#2D142C" />
      <TextInput 
        placeholder={name} 
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={showPassword} />
      {!secureTextEntry ? 
        <></>
        : <Icon 
            style={{marginRight: 'auto'}}
            name={showPassword ? 'eye' : 'eye-off'} 
            size={30} 
            color="#2D142C"
            onPress={changeShowPasswordIcon} />
      }
    </Container>
}

export default Input;