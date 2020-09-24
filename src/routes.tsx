import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';
import Main from './screens/Main';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Splash" component={Splash} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
