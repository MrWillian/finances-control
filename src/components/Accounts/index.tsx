import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import BottomSheet from 'reanimated-bottom-sheet';

import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import NewAccountSheet from '../NewAccountSheet';
import AccountsContainer from '../AccountsContainer';
import TransactionCard, { TransactionType } from '../TransactionCard';

import { AccountController } from '../../controllers';
import { Account, iToken } from '../../utils';

import { 
  Container, BillsContainer, BillsScroll, Title
} from './styles';

const Accounts: React.FC<iToken> = ({ token }) => {
  const [visible, setVisible] = useState(false);
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
        if (accounts === undefined) {
          Alert.alert('Erro', 'Ocorreu um erro ao tentar listar suas contas!', [{ style: "cancel" }]);
          return;
        }
        setAccounts(accounts);
        setVisible(true);
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

      <Title>Contas</Title>
      <ShimmerPlaceHolder 
        style={{marginBottom: 5, width: '100%', borderRadius: 5}} 
        LinearGradient={LinearGradient}
        visible={visible} />

      <AccountsContainer accountsList={accounts} />

      <BillsContainer>
        <Title>Movimentações</Title>
        
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
