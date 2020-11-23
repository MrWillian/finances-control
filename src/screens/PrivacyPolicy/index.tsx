import React from 'react';
import { Text } from 'react-native';
import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';
import { iNavigationProps } from '../../utils';

import { Content } from './styles';

const Settings: React.FC<iNavigationProps> = ({navigation}) => {
  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <Content>
        <Text>Políticas de Privacidade</Text>
        <Text>
          Nós, da Mr. Code, estamos comprometidos em resguardar sua privacidade. O intuito deste documento é
          esclarecer quais informações são coletadas dos usuários de nosso Aplicativo, o FinApp. 
          A Mr. Code reconhece que a sua privacidade é muito importante, portanto, 
          tomamos todas as medidas possíveis para protegê-la. Nesse sentido, a presente Política de Privacidade
          visa lhe informar como as suas informações e dados serão coletados, usados, compartilhados e armazenados
          por meio dos nossos siter e respectivos serviços.

          

        </Text>
      </Content>

      <MenuBottom activePage={'PrivacyPolicy'} />
    </BackgroundGradient>
  );
}

export default Settings;
