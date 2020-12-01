import React, { useEffect, useState } from 'react';
import { FlatList, Text, LogBox } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import { deleteAccount, loadRequest } from '../../../core/lib/adapters/redux/store/ducks/accounts/actions';
import { ApplicationState } from '../../../core/lib/adapters/redux/store';
import { Account } from '../../../core/lib/adapters/redux/store/ducks/accounts/types';
import { loadRequest as loadBalance } from '../../../core/lib/adapters/redux/store/ducks/balance';
import { StorageController } from '../../controllers';

import AccountCard from '../AccountCard';

import { Container, Divisor } from './styles';

const AccountsContainer: React.FC = () => {
  const accounts = useSelector<ApplicationState, Account[]>(state => state.accounts.data);
  const token = useSelector<ApplicationState, string>(state => state.credentials.token);
  let storageController = new StorageController();

  const [tokenStorage, setTokenStorage] = useState('');
  const [visible, setVisible] = useState(false);
  const time = new Date().getTime();

  const dispatch = useDispatch();

  useEffect(() => { 
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getTokenStorage();
    
    dispatch(loadRequest(token.length > 0 ? token : tokenStorage));
  }, []);
  
  useEffect(() => { setTimeout(() => { setVisible(true) }, 2000); }, [accounts]);

  const getTokenStorage: any = async () => 
          setTokenStorage((await storageController.getItem('@finances/user'))['access_token']);
  
  const keyExtractor = () => time.toString() + (Math.floor(Math.random() * Math.floor(time))).toString();
   
  const renderItem = ({item}: {item: Account}) => 
    <AccountCard key={item.id} account={item} handleDelete={handleDeleteAccount} />;
  
  const handleDeleteAccount = async (id: number) => {
    dispatch(deleteAccount(id, token));
    dispatch(loadRequest(token));
    dispatch(loadBalance(token));
    // if (response.error)
    // setAccounts.filter((account: Account) => account.id !== action.payload.id )
  }

  return (
    <Container>
      <ShimmerPlaceHolder 
        style={{marginBottom: 5, width: '100%', borderRadius: 5}} LinearGradient={LinearGradient} visible={visible}>

      {accounts.length > 0 ?
        <FlatList<Account>
          style={{flex:1, height: 165}}
          data={accounts} keyExtractor={keyExtractor} renderItem={renderItem} ItemSeparatorComponent={Divisor} />
        : 
        <Text style={{fontFamily: 'Comfortaa-Medium', color: '#CCC'}}>Nenhuma conta criada ainda...</Text>
      }
      </ShimmerPlaceHolder>
    </Container>
  );
}

export default AccountsContainer;
