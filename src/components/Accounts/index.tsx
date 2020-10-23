import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import BottomSheet from 'reanimated-bottom-sheet';

import NewAccountSheet from '../NewAccountSheet';
import AccountsContainer from '../AccountsContainer';
import TransactionCard, { TransactionType } from '../TransactionCard';

import { AccountController } from '../../controllers';
import { Account, iToken } from '../../utils';

import { 
  Container, BillsContainer, BillsScroll, BillsTitle
} from './styles';

const Accounts: React.FC<iToken> = ({ token }) => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const sheetRef = React.useRef(null);

  let accountController = new AccountController(token);

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

  useEffect(() => {
    async function handleGetAccounts() {
      await (accountController.index()).then((accounts: Account[]) => {
        if (accounts == undefined) {
          Alert.alert('Erro', 'Ocorreu um erro ao tentar listar suas contas!', [{ style: "cancel" }]);
          return;
        }
        setAccounts(accounts);
      }).catch((error: any) => {
        console.log(error);
      });
    }

    handleGetAccounts();
  }, []);

  const openBottomSheet = () => {
    let openBottom: BottomSheetBehavior | null = sheetRef.current;
    openBottom!.snapTo(0);
  }

  return (
    <Container>
      <AccountsContainer accountsList={accounts} />

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
