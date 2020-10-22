import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import BottomSheet from 'reanimated-bottom-sheet';
import { AccountController } from '../../controllers';
import { Account, iToken } from '../../utils';

import AccountCard from '../AccountCard';
import NewAccountSheet from '../NewAccountSheet';

import TransactionCard, { TransactionType } from '../TransactionCard';

import { 
  Container, AccountsContainer, Title, PlusButtonContainer, BillsContainer, BillsScroll, BillsTitle
} from './styles';

const Accounts: React.FC<iToken> = ({ token }) => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const sheetRef = React.useRef(null);
  const navigation = useNavigation();

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
    handleGetAccounts();
  }, []);

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

  const openBottomSheet = () => {
    let openBottom: BottomSheetBehavior | null = sheetRef.current;
    openBottom!.snapTo(0);
  }

  return (
    <Container>

      <AccountsContainer>
        <Title>Contas</Title>

        {accounts !== null ?
          accounts.map((account: Account, index) => (
            <AccountCard key={index} title={account.name} value={account.amount} />
          ))
        :
         (<Text>
            Nenhuma conta criada ainda...           
         </Text>)
        }

        <PlusButtonContainer onPress={() => navigation.navigate('NewAccount')}>
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
