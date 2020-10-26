import React, { useEffect } from 'react';
import { FlatList, Text, LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AccountCard from '../AccountCard';
import { Account } from '../../utils';

import { Container, PlusButtonContainer, Divisor } from './styles';

interface AccountsContainerProps {
  accountsList: Account[];
}

const AccountsContainer: React.FC<AccountsContainerProps> = ({ accountsList }) => {
  const navigation = useNavigation();

  useEffect(() => { 
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']); 
  }, []);

  const keyExtractor = (account: Account) => (account.id).toString();

  const renderItem = ({item}: {item: Account}) => <AccountCard key={item.id} title={item.name} value={item.amount}/>;

  return (
    <Container>
      {accountsList !== null ?
        <FlatList<Account>
          data={accountsList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={Divisor} />
        :
        (<Text>Nenhuma conta criada ainda...</Text>)
      }

      <PlusButtonContainer onPress={() => navigation.navigate('NewAccount')}>
        <Icon name="add" size={20} color="#FFF" />
      </PlusButtonContainer>
    </Container>
  );
}

export default AccountsContainer;
