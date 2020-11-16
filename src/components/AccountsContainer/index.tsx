import React, { useEffect, useState } from 'react';
import { FlatList, Text, LogBox } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import { deleteAccount, loadRequest } from '../../../core/lib/adapters/redux/store/ducks/accounts/actions';
import { ApplicationState } from '../../../core/lib/adapters/redux/store';
import { Account } from '../../../core/lib/adapters/redux/store/ducks/accounts/types';

import { FlashMessage } from '../FlashMessage';
import AccountCard from '../AccountCard';

import { Container, Divisor } from './styles';

const AccountsContainer: React.FC = () => {
  const accounts = useSelector<ApplicationState, Account[]>(state => state.accounts.data);
  const token = useSelector<ApplicationState, string>(state => state.credentials.token);

  const [visible, setVisible] = useState(false);
  const [flashMessage, setFlashMessage] = useState(false);
  const time = new Date().getTime();

  const dispatch = useDispatch();

  useEffect(() => { 
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    dispatch(loadRequest(token));
  }, []);

  useEffect(() => { setTimeout(() => { setVisible(true) }, 2000); }, [accounts]);

  const keyExtractor = () => time.toString() + (Math.floor(Math.random() * Math.floor(time))).toString();
   
  const renderItem = ({item}: {item: Account}) => 
    <AccountCard key={item.id} account={item} handleDelete={handleDeleteAccount} />;
  
  const handleDeleteAccount = async (id: number) => {
    dispatch(deleteAccount(id, token));
    dispatch(loadRequest(token));
    // if (response.error)
    // setAccounts.filter((account: Account) => account.id !== action.payload.id )
    setFlashMessage(true);
    setTimeout(() => { setFlashMessage(false) }, 3000);
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

      {flashMessage ? <FlashMessage message={'Conta deletada com sucesso...'} /> : null}

    </Container>
  );
}

export default AccountsContainer;
