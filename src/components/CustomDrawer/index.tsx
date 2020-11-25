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

  const items = [{
      name: "Meus Objetivos", 
      link: '',
    },{
      name: "Metas de despesas",
      link: '',
    },{
      name: "Relatórios",
      link: '',
    },{
      name: "Minhas conquistas", 
      link: '',
    },{
      name: "Configurações",
      link: 'Settings',
    },{
      name: "Políticas de Privacidade",
      link: 'PrivacyPolicy',
    },{
      name: "Excluir conta",
      link: 'DeleteUser',
    }
  ];

  const redirect = (link: string) => navigation.navigate(link);

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
              <ItemButton key={index} onPress={() => redirect(item.link)}>
                <ItemLabel>{item.name}</ItemLabel>
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