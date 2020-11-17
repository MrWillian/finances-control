import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const BalanceCardGradient: React.FC = ({children}) => {
  return (
    <LinearGradient 
      colors={[
        '#222f52',
        '#1B2540',
      ]}
      style={{ flex: 1 }}>
      {children}
    </LinearGradient>
  );
}

export default BalanceCardGradient;
