import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AccountCard from '../AccountCard';
import TransactionCard, { TransactionType } from '../TransactionCard';

import { 
  Container, AccountsContainer, Title, PlusButtonContainer, 
  BillsContainer, BillsScroll, BillsTitle
} from './styles';

const Accounts: React.FC = () => {
  const navigation = useNavigation();

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
      value: 'R$ 1.049,00',
      type: TransactionType.BILLTORECEIVE,
    }, {
      title: 'Vendas semanais',
      value: 'R$ 550,00',
      type: TransactionType.BILLTORECEIVE,
    },
  ];

  return (
    <Container>
      <AccountsContainer>
        <Title>Contas</Title>

        {accounts.map((account, index) => (
          <AccountCard key={index} title={account.title} value={account.value} />
        ))}
        

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

    </Container>
  );
}

export default Accounts;
