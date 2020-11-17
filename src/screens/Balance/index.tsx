import React from 'react';

import { BackgroundGradient } from '../../components/Gradients';
import BalanceCardGradient from '../../components/Gradients/BalanceCardGradient';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';
import Transactions from '../../components/Transactions';
import TransactionsForCategory from '../../components/TransactionsForCategory';

import { iNavigationProps } from '../../utils';

import { 
  Content, 
  TotalContainer, 
  TotalValue, 
  TotalLabel, 
  BalanceCard, 
  BalanceCardContainer,
  CountAccountsContainer, 
  CountAccountsLabel, 
  CountAccountsValue,
  ValuesContainer,
  TypeContainer,
  TypeLabel,
  TypeValue
} from './styles';

const Balance: React.FC<iNavigationProps> = ({navigation}) => {
  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <Content>
        <TotalContainer>
          <TotalValue>R$ 130,00</TotalValue>
          <TotalLabel>Balanço total</TotalLabel>
        </TotalContainer>

        <BalanceCard>
          <BalanceCardGradient>
            <BalanceCardContainer>

              <CountAccountsContainer>
                <CountAccountsLabel>Contas:</CountAccountsLabel>
                <CountAccountsValue>3</CountAccountsValue>
              </CountAccountsContainer>

              <ValuesContainer>
                <TypeContainer>
                  <TypeLabel>Ganhos</TypeLabel>
                  <TypeValue>R$ 450,00</TypeValue>
                </TypeContainer>

                <TypeContainer>
                  <TypeLabel>Gastos</TypeLabel>
                  <TypeValue>R$ 300,00</TypeValue>
                </TypeContainer>
              </ValuesContainer>

            </BalanceCardContainer>
          </BalanceCardGradient>
        </BalanceCard>

        <TransactionsForCategory />
      </Content>

      <MenuBottom activePage={'Balance'} />
    </BackgroundGradient>
  );
}

export default Balance;
