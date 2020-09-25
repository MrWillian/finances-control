import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, TextInput } from './styles';

interface Props {
  name?: string;
  icon: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<Props> = ({ name, icon, secureTextEntry }) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const changeShowPasswordIcon = () => {
    setShowPassword(!showPassword);
  }

  return (
    <Container>
      <Icon name={icon} size={30} color="#2D142C" />
      <TextInput 
        placeholder={name} 
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
  );
}

export default Input;