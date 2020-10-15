import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import BottomSheet from 'reanimated-bottom-sheet';

import AccountCard from '../AccountCard';
import NewAccountSheet from '../NewAccountSheet';

import TransactionCard, { TransactionType } from '../TransactionCard';

import { 
  Container, AccountsContainer, Title, PlusButtonContainer, 
  BillsContainer, BillsScroll, BillsTitle
} from './styles';

const Accounts: React.FC = () => {
  const sheetRef = React.useRef(null);

  const accounts = [
    {
      title: 'Conta Banco 1',
      value: 'R$ 1.300,00'
    }, {
      title: 'Conta Banco 2',
      value: 'R$ 4.800,00'
    },
  ];

  const transactions = [
    {
      title: 'Fat. Cartão',
      value: 'R$ -10,00',
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

  return (
    <Container>

      <AccountsContainer>
        <Title>Contas</Title>

        {accounts.map((account, index) => (
          <AccountCard key={index} title={account.title} value={account.value} />
        ))}

        <PlusButtonContainer onPress={openBottomSheet}>
          <Icon name="add" size={20} color="#FFF" />
        </PlusButtonContainer>
      </AccountsContainer>

      <BillsContainer>
        <BillsTitle>Movimentações</BillsTitle>
        
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
        snapPoints={['60%', 0, 0]}
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
