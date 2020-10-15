import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import { Container, Title, Value } from './styles';

interface Props {
  title: string;
  value: string;
  type: TransactionType;
}

export enum TransactionType {
  BILLTOPAY,
  BILLTORECEIVE
}

const TransactionCard: React.FC<Props> = ({ 
  title, value, type
}) => {

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
        {type == TransactionType.BILLTOPAY 
          ? (<Icon style={{alignSelf: 'flex-end'}} name="minuscircleo" size={20} color='#FFF' />)
          : (<Icon style={{alignSelf: 'flex-end'}} name="pluscircleo" size={20} color='#FFF' />)
        }
        <Title>{title}</Title>
        <Value color={type == TransactionType.BILLTOPAY ? 'red' : 'green'}>
          {value}
        </Value>
      </Container>

    </LinearGradient>
  );
}

export default TransactionCard;