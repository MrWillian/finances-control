import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
    "Preferências"
  ];

  // const redirect = (item) => {
  //   console.log("Redirect...", item);
  // }

  const logout = () => {
    storageController.removeItem('@finances/user');
    navigation.navigate('Login');
  }

  return (
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
          <LogoutButtonLabel>
            Sair
          </LogoutButtonLabel>
        </LogoutButton>
      </Bottom>
    </Container>
  );
}

export default CustomDrawer;