import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';
import { AuthController, StorageController } from '../../controllers';
import { iNavigationProps } from '../../utils';

import { Content } from './styles';

const DeleteUser: React.FC<iNavigationProps> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');
  const [userID, setUserID] = useState(undefined);

  let authController = new AuthController();
  let storageController = new StorageController();
  
  async function handleDelete() {
    setIsLoading(true);
    const getTokenStorage: any = async () => setToken((await storageController.getItem('@finances/user'))['access_token']);
    const getUserIDStorage: any = async () => setUserID((await storageController.getItem('@finances/user'))['data']['id']);
    
    getTokenStorage();
    getUserIDStorage();

    await (authController.delete(token, userID)).then(data => {
      if (data.data === undefined) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar excluir seus dados, tente novamente!', [{ style: "cancel" }]);
        setIsLoading(false);
        return;
      }
      Alert.alert('Sucesso', 'Sucesso ao deletar seu usuário!');
      storageController.removeItem('@finances/user');
      setIsLoading(false);
      navigation.navigate('Login');
    });
  }

  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <Content>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Comfortaa-Bold', fontSize: 22, color: '#FF0000' }}>Deletar conta</Text>
          <Icon style={{ marginLeft: 10 }} name="alert-circle" size={25} color="#FF0000" />
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

        <TouchableOpacity 
          style={{ 
            marginTop: 20,
            padding: 10, 
            backgroundColor: '#E64545', 
            borderRadius: 5, 
            alignItems: 'center', 
            justifyContent: 'center',
            elevation: 5,
          }}
          onPress={handleDelete}>
          {isLoading ? 
            <ActivityIndicator animating={isLoading} size="large" color="#FFF" /> 
            :
            <Text style={{ fontFamily: 'Comfortaa-Bold', color: '#FDFDFD', textTransform: 'uppercase' }}>
              Deletar
            </Text>
          }
        </TouchableOpacity>

      </Content>

      <MenuBottom activePage={'Settings'} />
    </BackgroundGradient>
  );
}

export default DeleteUser;
