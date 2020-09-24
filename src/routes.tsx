import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';
import Main from './screens/Main';
import CustomDrawer from './components/CustomDrawer';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const OpenStack = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Splash" component={Splash} />
      <AppStack.Screen name="Register" component={Register} />
      <AppStack.Screen name="Login" component={Login} />
    </AppStack.Navigator>
  );
}

const MainStack = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Main" component={Main} />
    </AppStack.Navigator>
  );
}

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Screen name="OpenStack" component={OpenStack} />
      <Drawer.Navigator
        drawerContent={() => <CustomDrawer />}
        edgeWidth={0}>
        <Drawer.Screen name="MainStack" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
