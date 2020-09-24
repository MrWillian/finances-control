import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
  Container, AccountsContainer, Title, AccountCard, AccountTitle, PlusButtonContainer, 
  BillsContainer, BillsScroll, BillsTitle, BillsCard, BillsCardTitle, BillsCardValuePositive, BillsCardValueNegative
} from './styles';

const Accounts: React.FC = () => {
  return (
    <Container>
      <AccountsContainer>
        <Title>Contas</Title>
        <AccountCard>
          <AccountTitle>Conta Banco 1</AccountTitle>
          <Text>R$ 1.300,00</Text>
        </AccountCard>

        <AccountCard>
          <AccountTitle>Conta Banco 2</AccountTitle>
          <Text>R$ 4.800,00</Text>
        </AccountCard>

        <PlusButtonContainer>
          <Icon name="add" size={20} color="#FFF" />
        </PlusButtonContainer>
      </AccountsContainer>

      <BillsContainer>
        <BillsTitle>Contas a pagar</BillsTitle>
        
        <BillsScroll horizontal={true}>

          <BillsCard>
            <BillsCardTitle>Internet</BillsCardTitle>
            <BillsCardValueNegative>R$ 100,00</BillsCardValueNegative>
          </BillsCard>

          <BillsCard>
            <BillsCardTitle>Luz</BillsCardTitle>
            <BillsCardValueNegative>R$ 90,00</BillsCardValueNegative>
          </BillsCard>

          <BillsCard>
            <BillsCardTitle>Fatura Cartão</BillsCardTitle>
            <BillsCardValueNegative>R$ 237,00</BillsCardValueNegative>
          </BillsCard>

          <BillsCard>
            <BillsCardTitle>Assinatura TV</BillsCardTitle>
            <BillsCardValueNegative>R$ 60,00</BillsCardValueNegative>
          </BillsCard>
        </BillsScroll>

      </BillsContainer>

      <BillsContainer>
        <BillsTitle>Contas a receber</BillsTitle>

        <BillsScroll horizontal={true}>
          <BillsCard>
            <BillsCardTitle>Salário</BillsCardTitle>
            <BillsCardValuePositive>R$ 3100,00</BillsCardValuePositive>
          </BillsCard>

          <BillsCard>
            <BillsCardTitle>Venda - Bicicleta</BillsCardTitle>
            <BillsCardValuePositive>R$ 490,00</BillsCardValuePositive>
          </BillsCard>
        </BillsScroll>
        
      </BillsContainer>
    </Container>
  );
}

export default Accounts;
