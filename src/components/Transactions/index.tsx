import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import PlusButton from '../PlusButton';
import TransactionCard from '../TransactionCard';
import { Transaction } from '../../../core/lib/adapters/redux/store/ducks/transactions';
import { ApplicationState } from '../../../core/lib/adapters/redux/store';
import { loadRequest } from '../../../core/lib/adapters/redux/store/ducks/transactions';
import { StorageController } from '../../controllers';

import { Container, Scroll, HeaderContainer, Title } from './styles';

const Transactions: React.FC = () => {
  const transactions = useSelector<ApplicationState, Transaction[]>(state => state.transactions.data);
  const token = useSelector<ApplicationState, string>(state => state.credentials.token);
  let storageController = new StorageController();

  const [tokenStorage, setTokenStorage] = useState('');
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigateToScreen = (screen: string) => navigation.navigate(screen);

  useEffect(() => { 
    getTokenStorage();
    dispatch(loadRequest(token.length > 0 ? token : tokenStorage));
  }, []);

  useEffect(() => { setTimeout(() => { setVisible(true) }, 2000); }, [transactions]);
  
  const getTokenStorage: any = async () => setTokenStorage((await storageController.getItem('@finances/user'))['access_token']);

  return (
    <Container>
      <HeaderContainer>
        <Title>Movimentações</Title>
        <PlusButton onPress={() => navigateToScreen('NewTransaction')} />
      </HeaderContainer>

      <ShimmerPlaceholder 
        style={{marginBottom: 5, width: '100%', borderRadius: 5}} LinearGradient={LinearGradient} visible={visible}>
          
        <Scroll horizontal={true}>
          {transactions.length > 0 ?
            transactions.map((transaction, index) => (
              <TransactionCard 
                key={index} 
                title={transaction.description} 
                value={transaction.value}
                type={transaction.type} />
            ))
            :
            <Text style={{fontFamily: 'Comfortaa-Medium', color: '#CCC'}}>Nenhuma movimentação criada ainda...</Text>
          }
        </Scroll>

      </ShimmerPlaceholder>

    </Container>
  );
}

export default Transactions;