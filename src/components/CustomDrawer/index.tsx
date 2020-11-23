import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { DrawerGradient } from '../Gradients';
import { StorageController } from '../../controllers';

import { 
  Container, ItemsContainer, ItemButton, ItemLabel, Bottom, LogoutButton, LogoutButtonLabel
} from './styles';

const CustomDrawer: React.FC = () => {
  const navigation = useNavigation();
  let storageController = new StorageController();

  const items = [
    "Meus Objetivos", 
    "Metas de despesas",
    "Relatórios",
    "Minhas conquistas",
    "Preferências",
    "Políticas de Privacidade",
  ];

  // const redirect = (item) => {
  //   console.log("Redirect...", item);
  // }

  const logout = () => {
    storageController.removeItem('@finances/user');
    navigation.navigate('Login');
  }

  return (
    <DrawerGradient>
      <Container>
        <ItemsContainer>
          {items.map((item, index) => {
            return (
              <ItemButton key={index}>
                <ItemLabel>{item}</ItemLabel>
              </ItemButton>
            );
          })}
        </ItemsContainer>
        <Bottom>
          <LogoutButton onPress={logout}>
            <Icon name="log-out-outline" size={35} color="#97A6D7" />
            <LogoutButtonLabel>Sair</LogoutButtonLabel>
          </LogoutButton>
        </Bottom>
      </Container>
    </DrawerGradient>
  );
}

export default CustomDrawer;