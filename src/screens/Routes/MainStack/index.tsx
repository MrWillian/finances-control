import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from '../../Main';
import CustomDrawer from '../../../components/CustomDrawer';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawer />}
      edgeWidth={0}>
      <AppStack.Screen name="Main" component={Main} />
    </Drawer.Navigator>
  );
}

export default MainStack;