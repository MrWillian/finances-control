import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../core/lib/adapters/redux/store';
import { Balance, loadRequest } from '../../../core/lib/adapters/redux/store/ducks/balance';

import { BackgroundGradient } from '../../components/Gradients';
import BalanceCardGradient from '../../components/Gradients/BalanceCardGradient';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';
import TransactionsForCategory from '../../components/TransactionsForCategory';
import { StorageController } from '../../controllers';

import { iNavigationProps } from '../../utils';
import { formatNumber } from '../../utils/format';

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
  let storageController = new StorageController();

  const [tokenStorage, setTokenStorage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => { 
    getTokenStorage();
    dispatch(loadRequest(token.length > 0 ? token : tokenStorage));
  }, []);

  const getTokenStorage: any = async () => setTokenStorage((await storageController.getItem('@finances/user'))['access_token']);
  
  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <Content>
        <TotalContainer>
          <TotalValue>{formatNumber(balance.length > 0 ? balance[0].total : 0)}</TotalValue>
          <TotalLabel>Balanço total</TotalLabel>
        </TotalContainer>

        <BalanceCard>
          <BalanceCardGradient>
            <BalanceCardContainer>

              <CountAccountsContainer>
                <CountAccountsLabel>Contas:</CountAccountsLabel>
                <CountAccountsValue>{balance.length > 0 ? balance[0].count : 0}</CountAccountsValue>
              </CountAccountsContainer>

              <ValuesContainer>
                <TypeContainer>
                  <TypeLabel>Ganhos</TypeLabel>
                  <TypeValue>{formatNumber(balance.length > 0 ? balance[0].totalProfit : 0)}</TypeValue>
                </TypeContainer>

                <TypeContainer>
                  <TypeLabel>Gastos</TypeLabel>
                  <TypeValue>{formatNumber(balance.length > 0 ? balance[0].totalExpense : 0)}</TypeValue>
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
