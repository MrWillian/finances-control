import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {default as OctIcon}  from 'react-native-vector-icons/Octicons';

import { MenuBottomEnum } from '../../utils';
import { MenuButton, MenuButtonContainer, MenuButtonLabel } from './styles';

interface Props {
  screen: string;
  isActive: boolean;
  iconName: string;
}

const MenuBottomButton: React.FC<Props> = ({ screen, isActive, iconName }) => {
  const [label, setLabel] = useState('');
  const [iconColor, setIconColor] = useState('#FFF');
  const navigation = useNavigation();

  const iconSize = 20;

  useEffect(() => {
    const init = () => {
      switch (screen) {
        case MenuBottomEnum.STATS: 
          setLabel(MenuBottomEnum.STATS_VALUE); break;
        case MenuBottomEnum.MAIN:
          setLabel(MenuBottomEnum.MAIN_VALUE); break;
        case MenuBottomEnum.SETTINGS:
          setLabel(MenuBottomEnum.SETTINGS_VALUE); break;
        default:
          break;
      }
    }

    const defineIconColor = () => setIconColor(isActive ? '#FFF' : '#91A0D0');

    init();
    defineIconColor();
  }, []);

  const onPress = () => navigation.navigate(screen);
  
  return (
    <MenuButton onPress={onPress}>
      <MenuButtonContainer isActive={isActive}>
        {iconName !== MenuBottomEnum.SETTINGS_ICON ?  
          <Icon name={iconName} size={iconSize} color={iconColor} /> 
          : 
          <OctIcon name={iconName} size={iconSize} color={iconColor} />
         }
        <MenuButtonLabel>{label}</MenuButtonLabel>
      </MenuButtonContainer>
    </MenuButton>
  );
}

export default MenuBottomButton;
