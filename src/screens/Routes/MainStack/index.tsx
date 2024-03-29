import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from '../../Main';
import Stats from '../../Stats';
import Settings from '../../Settings';
import CustomDrawer from '../../../components/CustomDrawer';
import NewAccount from '../../NewAccount';
import ViewAccount from '../../ViewAccount';
import NewTransaction from '../../NewTransaction';
import BalanceStats from '../../BalanceStats';
import PrivacyPolicy from '../../PrivacyPolicy';
import DeleteUser from '../../DeleteUser';

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
      <AppStack.Screen name="NewTransaction" component={NewTransaction} />
      <AppStack.Screen name="ViewAccount" component={ViewAccount} />
      <AppStack.Screen name="BalanceStats" component={BalanceStats} />
      <AppStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <AppStack.Screen name="DeleteUser" component={DeleteUser} />
    </Drawer.Navigator>
  );
}

export default MainStack;
