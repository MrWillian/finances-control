import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';
import { iNavigationProps } from '../../utils';

import { Content } from './styles';

const DeleteUser: React.FC<iNavigationProps> = ({navigation}) => {
  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <Content>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{ fontFamily: 'Comfortaa-Bold', fontSize: 22, color: '#FF0000' }}>Deletar conta</Text>
          <Icon style={{ marginLeft: 10 }} name="alert-circle" size={25} color="#E64545" />
        </View>

        <Text style={{ fontFamily: 'Comfortaa-Regular', color: '#E64545', marginTop: 15 }}>
          Você deseja deletar a sua conta?
        </Text>

        <Text style={{ fontFamily: 'Comfortaa-Regular', color: '#fdfdfd', marginTop: 5 }}>
          Você irá perder todos os seus dados inseridos no nosso app, assim como
          dados de usuário, e consequentemente redirecionado para fora do FinApp. Caso esteja ciente das consequências,
          pressione o botão "Deletar" abaixo.
        </Text>

        <Text style={{ fontFamily: 'Comfortaa-Regular', color: '#fdfdfd', marginTop: 15 }}>
          Antes, por favor, nos conte o motivo de estar deixando a nossa plataforma no campo abaixo.
        </Text>

        <Input 
          containerStyle={{ marginTop: 20 }}
          inputStyle={{backgroundColor: '#FFF', paddingLeft: 10, borderRadius: 5, fontSize: 12}}
          placeholder="Nos contar seu motivo é opcional..."
        />

        <TouchableOpacity style={{ 
          marginTop: 20,
          padding: 10, 
          backgroundColor: '#E64545', 
          borderRadius: 10, 
          alignItems: 'center', 
          justifyContent: 'center',
        }}>
          <Text style={{ color: '#FDFDFD', textTransform: 'uppercase' }}>Deletar</Text>
        </TouchableOpacity>

      </Content>

      <MenuBottom activePage={'Settings'} />
    </BackgroundGradient>
  );
}

export default DeleteUser;
