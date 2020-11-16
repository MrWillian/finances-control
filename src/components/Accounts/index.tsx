import React from 'react';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from 'reanimated-bottom-sheet';

import NewAccountSheet from '../NewAccountSheet';
import AccountsContainer from '../AccountsContainer';
import PlusButton from '../PlusButton';

import { Container, HeaderContainer, Title } from './styles';

const Accounts: React.FC = () => {
  const sheetRef = React.useRef(null);
  const navigation = useNavigation();
  
  const openBottomSheet = () => {
    let openBottom: BottomSheetBehavior | null = sheetRef.current;
    openBottom!.snapTo(0);
  }

  const navigateToScreen = (screen: string) => navigation.navigate(screen);

  return (
    <Container>
      <HeaderContainer>
        <Title>Contas</Title>
        <PlusButton onPress={() => navigateToScreen('NewAccount')} />
      </HeaderContainer>

      <AccountsContainer />

      {/* <BottomSheet
        ref={sheetRef}
        // snapPoints={['60%', 0, 0]}
        snapPoints={['50%', '0%', 0]}
        initialSnap={2}
        borderRadius={10}
        renderContent={NewAccountSheet}
        // enabledContentGestureInteraction={false}
        enabledContentTapInteraction={false}
        /> */}

    </Container>
  );
}

export default Accounts;
