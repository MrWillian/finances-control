import React, { useState } from 'react';
import { Switch } from 'react-native';
import { BottomSheet, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';

import { iNavigationProps } from '../../utils';

import { 
  Content, SettingsMenu, SettingsItemMenu, Title, SettingsItem, SettingsItemLabel, SettingsItemValue, SettingsItemValueLabel
} from './styles';

const Settings: React.FC<iNavigationProps> = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  const [themeSheetIsVisible, setThemeSheetIsVisible] = useState(false);
  const [languageSheetIsVisible, setLanguageSheetIsVisible] = useState(false);

  const themeList = [
    { 
      title: 'Dark', 
      containerStyle: { backgroundColor: 'rgba(27, 37, 64, 1)'},
      titleStyle: { fontFamily: 'Comfortaa-Bold', color: 'white' }
    },
    { 
      title: 'Light',
      containerStyle: {backgroundColor: 'rgba(27, 37, 64, 1)' },
      titleStyle: { fontFamily: 'Comfortaa-Bold', color: 'white' }
    },
    {
      title: 'Cancelar',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { fontFamily: 'Comfortaa-Bold', color: 'white'  },
      onPress: () => setThemeSheetIsVisible(false),
    },
  ];

  const languageList = [
    { 
      title: 'Português', 
      containerStyle: { backgroundColor: 'rgba(27, 37, 64, 1)'},
      titleStyle: { fontFamily: 'Comfortaa-Bold', color: 'white' }
    },
    {
      title: 'Cancelar',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { fontFamily: 'Comfortaa-Bold', color: 'white' },
      onPress: () => setLanguageSheetIsVisible(false),
    },
  ];

  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <Content>
        <SettingsMenu>
          <SettingsItemMenu>

            <Title>Geral</Title>
            <SettingsItem>
              <SettingsItemLabel>Tema</SettingsItemLabel>
              <SettingsItemValue onPress={() => setThemeSheetIsVisible(true)}>
                <SettingsItemValueLabel>Dark</SettingsItemValueLabel>
                <Icon name="arrow-forward" size={15} color="#C8C8C8" />
              </SettingsItemValue>
            </SettingsItem>
            <SettingsItem>
              <SettingsItemLabel>Idioma</SettingsItemLabel>
              <SettingsItemValue onPress={() => setLanguageSheetIsVisible(true)}>
                <SettingsItemValueLabel>Português</SettingsItemValueLabel>
                <Icon name="arrow-forward" size={15} color="#C8C8C8" />
              </SettingsItemValue>
            </SettingsItem>
            <SettingsItem>
              <SettingsItemLabel>Esconder saldo de contas</SettingsItemLabel>
              <Switch 
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#C8C8C8" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </SettingsItem>

          </SettingsItemMenu>

          <SettingsItemMenu>
            <Title>Alertas e Notificações</Title>

          </SettingsItemMenu>
        </SettingsMenu>
      </Content>

      <BottomSheet isVisible={themeSheetIsVisible} modalProps={{ animated: true }}>
        {themeList.map((l, i) => (
          <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>

      <BottomSheet isVisible={languageSheetIsVisible} modalProps={{ animated: true }}>
        {languageList.map((l, i) => (
          <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>

      <MenuBottom activePage={'Settings'} />
    </BackgroundGradient>
  );
}

export default Settings;
