import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Container, Title, Value } from './styles';

interface Props {
  title : string;
  value : string;
}

const AccountCard: React.FC<Props> = ({ title, value }) => {
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
        padding: 20, 
        marginTop: 10
      }}>
      
      <Container>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Container>

    </LinearGradient>
  );
}

export default AccountCard;