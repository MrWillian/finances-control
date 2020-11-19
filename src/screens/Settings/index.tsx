import React, { useEffect, useState } from 'react';
import { Switch } from 'react-native';
import { BottomSheet, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../core/lib/adapters/redux/store';
import { 
  Settings as SettingsData, loadRequest, updateSettings 
} from '../../../core/lib/adapters/redux/store/ducks/settings';

import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';
import { iNavigationProps } from '../../utils';

import { 
  Content, SettingsMenu, SettingsItemMenu, Title, SettingsItem, SettingsItemLabel, SettingsItemValue, SettingsItemValueLabel
} from './styles';

const Settings: React.FC<iNavigationProps> = ({navigation}) => {
  const settingsData = useSelector<ApplicationState, SettingsData[]>(state => state.settings.data);
  const token = useSelector<ApplicationState, string>(state => state.credentials.token);

  const [themeSheetIsVisible, setThemeSheetIsVisible] = useState(false);
  const [languageSheetIsVisible, setLanguageSheetIsVisible] = useState(false);
  const [hideTotalOfAccounts, setHideTotalOfAccounts] = useState(
    settingsData.length > 0 ? settingsData[0]?.hideTotalOfAccounts : false 
  );
  const [theme, setTheme] = useState(settingsData[0]?.theme);
  const [language, setLanguage] = useState(settingsData[0]?.language);
  
  const dispatch = useDispatch();
  
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

  useEffect(() => { 
    console.log('token 1', token);
    setTimeout(() => { dispatch(loadRequest(token)); }, 1000);
    console.log('settings', settingsData);
    console.log('hideTotalOfAccounts', hideTotalOfAccounts);
  }, []);

  const toggleSwitch = () => {
    console.log('token 2', token);
    setHideTotalOfAccounts(!hideTotalOfAccounts);
    // console.log('hideTotalOfAccounts', hideTotalOfAccounts);
    dispatch(updateSettings({ hideTotalOfAccounts: hideTotalOfAccounts }, token));
  };

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
                thumbColor={hideTotalOfAccounts ? "#C8C8C8" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={hideTotalOfAccounts}
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
