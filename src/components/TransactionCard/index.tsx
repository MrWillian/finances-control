import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { formatNumber } from '../../utils/format';

import { Container, Title, Value } from './styles';

interface Props {
  title: string;
  value: number;
  type: string;
}

const TransactionCard: React.FC<Props> = ({ title, value, type }) => {
  return (
    <LinearGradient 
      colors={[
        '#59668F', 
        '#414D72',
        '#2A3453', 
      ]}
      style={{
        flex: 1, 
        borderRadius: 5, 
        justifyContent: 'space-between',
        padding: 15,
        marginLeft: 0,
        marginRight: 10,
        width: 110,
        height: 150,
      }}>
      
      <Container>
        {type === 'expense' 
          ? (<Icon style={{alignSelf: 'flex-end'}} name="minuscircleo" size={20} color='#FFF' />)
          : (<Icon style={{alignSelf: 'flex-end'}} name="pluscircleo" size={20} color='#FFF' />)
        }
        <Title>{title}</Title>
        <Value color={type === 'expense' ? 'red' : 'green'}>
          {type === 'expense' ? '- ' : '+ '}
          {formatNumber(value)}
        </Value>
      </Container>

    </LinearGradient>
  );
}

export default TransactionCard;