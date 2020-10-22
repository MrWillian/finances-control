import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from '../../Main';
import Stats from '../../Stats';
import Settings from '../../Settings';
import CustomDrawer from '../../../components/CustomDrawer';
import NewAccount from '../../NewAccount';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawer />}
      edgeWidth={0}>
      <AppStack.Screen name="Main" component={Main} />
      <AppStack.Screen name="Stats" component={Stats} />
      <AppStack.Screen name="Settings" component={Settings} />
      <AppStack.Screen name="NewAccount" component={NewAccount} />
    </Drawer.Navigator>
  );
}

export default MainStack;