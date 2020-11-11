import React from 'react';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from 'reanimated-bottom-sheet';

import NewAccountSheet from '../NewAccountSheet';
import AccountsContainer from '../AccountsContainer';
import TransactionCard, { TransactionType } from '../TransactionCard';

import { Container, HeaderContainer, BillsContainer, BillsScroll, Title} from './styles';
import PlusButton from '../PlusButton';

const Accounts: React.FC = () => {
  const sheetRef = React.useRef(null);
  const navigation = useNavigation();

  const transactions = [
    {
      title: 'Fat. Cartão',
      value: 'R$ -125,30',
      type: TransactionType.BILLTOPAY,
    }, {
      title: 'Salário',
      value: 'R$ +1.049,00',
      type: TransactionType.BILLTORECEIVE,
    }, {
      title: 'Vendas semanais',
      value: 'R$ +550,00',
      type: TransactionType.BILLTORECEIVE,
    },
  ];
  
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

      <BillsContainer>
        <HeaderContainer>
          <Title>Movimentações</Title>
          <PlusButton onPress={() => navigateToScreen('NewTransaction')} />
        </HeaderContainer>

        <BillsScroll horizontal={true}>

          {transactions.map((transaction, index) => (
            <TransactionCard 
              key={index} 
              title={transaction.title} 
              value={transaction.value}
              type={transaction.type} />
          ))}
          
        </BillsScroll>
      </BillsContainer>

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
