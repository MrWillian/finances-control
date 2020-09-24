import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../../Splash';
import Register from '../../Register';
import Login from '../../Login';

const AppStack = createStackNavigator();

const OpenStack: React.FC = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Splash" component={Splash} />
      <AppStack.Screen name="Register" component={Register} />
      <AppStack.Screen name="Login" component={Login} />
    </AppStack.Navigator>
  );
}

export default OpenStack;
