import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export interface iNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
