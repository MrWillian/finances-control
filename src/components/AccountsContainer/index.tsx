import React, { useEffect, useState } from 'react';
import { FlatList, Text, LogBox, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import { AccountController } from '../../controllers';
import { Account } from '../../utils';
import AccountCard from '../AccountCard';

import { Container, PlusButtonContainer, Divisor } from './styles';

const AccountsContainer: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const accountController = AccountController.getInstance();

  useEffect(() => { 
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    
    handleGetAccounts();
  }, []);

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

  const handleDeleteAccount = async (id: number) => {
    await (accountController.delete(id)).then(() => {
      setAccounts(accounts.filter(account => id !== account.id));
    }).catch((error) => {
      console.log(error);
    });
  }
  
  const keyExtractor = (account: Account) => (account.id).toString();

  const renderItem = ({item}: {item: Account}) =>
    <AccountCard key={item.id} id={item.id} title={item.name} value={item.amount} handleDelete={handleDeleteAccount} />;
  
  return (
    <Container>
      <ShimmerPlaceHolder 
        style={{marginBottom: 5, width: '100%', borderRadius: 5}} 
        LinearGradient={LinearGradient}
        visible={visible} />

      {accounts.length > 0 ?
        <FlatList<Account>
          data={accounts}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={Divisor} />
        :
        <Text style={{fontFamily: 'Comfortaa-Medium', color: '#CCC'}}>Nenhuma conta criada ainda...</Text>
      }

      <PlusButtonContainer onPress={() => navigation.navigate('NewAccount')}>
        <Icon name="add" size={20} color="#FFF" />
      </PlusButtonContainer>
    </Container>
  );
}

export default AccountsContainer;
