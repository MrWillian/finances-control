import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OpenStack from './screens/Routes/OpenStack';
import MainStack from './screens/Routes/MainStack';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="OpenStack" component={OpenStack} />
        <Drawer.Screen name="MainStack" component={MainStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
