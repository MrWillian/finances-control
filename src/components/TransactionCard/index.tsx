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
        'rgba(128, 19, 54, 1)', 
        'rgba(128, 19, 54, 0.7)', 
        'rgba(128, 19, 54, 0.5)', 
        'rgba(128, 19, 54, 0.3)',
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
          ? (<Icon style={{alignSelf: 'flex-end'}} name="minuscircleo" size={25} color='#FFF' />)
          : (<Icon style={{alignSelf: 'flex-end'}} name="pluscircleo" size={25} color='#FFF' />)
        }
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Container>

    </LinearGradient>
  );
}

export default TransactionCard;