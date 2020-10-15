import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Container, AccountInfo, Title, Value, See, SeeLabel, Divisor } from './styles';

interface Props {
  title : string;
  value : string;
}

const AccountCard: React.FC<Props> = ({ title, value }) => {

  const handleSeeAccount = () => {
    
  }

  return (
    // <LinearGradient 
    //   colors={[
    //     'rgba(128, 19, 54, 1)', 
    //     'rgba(128, 19, 54, 0.7)', 
    //     'rgba(128, 19, 54, 0.5)', 
    //     'rgba(128, 19, 54, 0.3)',
    //   ]}
    //   style={{
    //     flex: 1, 
    //     borderRadius: 5, 
    //     padding: 20, 
    //     marginTop: 10
    //   }}>
      <>
        <Container>
          <AccountInfo>
            <Title>{title}</Title>
            <Value>{value}</Value>
          </AccountInfo>
          <See onPress={handleSeeAccount}>
            <SeeLabel>Visualizar</SeeLabel>
          </See>
        </Container>
        <Divisor />
      </>
    // </LinearGradient>
  );
}

export default AccountCard;