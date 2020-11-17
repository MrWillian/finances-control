import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../core/lib/adapters/redux/store';
import { Balance } from '../../../core/lib/adapters/redux/store/ducks/balance';
import { loadRequest } from '../../../core/lib/adapters/redux/store/ducks/balance';

import { BackgroundGradient } from '../../components/Gradients';
import BalanceCardGradient from '../../components/Gradients/BalanceCardGradient';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';
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

const BalanceStats: React.FC<iNavigationProps> = ({navigation}) => {
  const balance = useSelector<ApplicationState, Balance[]>(state => state.balance.data);
  const token = useSelector<ApplicationState, string>(state => state.credentials.token);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest(token));
    console.log('balance', balance[0]);
  }, []);

  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <Content>
        <TotalContainer>
          <TotalValue>R$ {balance.length > 0 ? balance[0].total : '0,00'}</TotalValue>
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
                  <TypeValue>R$ {balance.length > 0 ? balance[0].totalProfit : '0,00'}</TypeValue>
                </TypeContainer>

                <TypeContainer>
                  <TypeLabel>Gastos</TypeLabel>
                  <TypeValue>R$ {balance.length > 0 ? balance[0].totalExpense : '0,00'}</TypeValue>
                </TypeContainer>
              </ValuesContainer>

            </BalanceCardContainer>
          </BalanceCardGradient>
        </BalanceCard>

        <TransactionsForCategory categories={balance.length > 0 ? balance[0].categoriesBalance : undefined} />
      </Content>

      <MenuBottom activePage={'BalanceStats'} />
    </BackgroundGradient>
  );
}

export default BalanceStats;
