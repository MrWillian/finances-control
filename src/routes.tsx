import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './screens/Splash';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Splash" component={Splash} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
