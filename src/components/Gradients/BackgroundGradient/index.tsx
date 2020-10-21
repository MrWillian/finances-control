import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundGradient: React.FC = ({children}) => {
  return (
    <LinearGradient 
      colors={[
        '#1B2540',
        '#1B2540',
      ]}
      style={{ flex: 1 }}>
      
      {children}
      
    </LinearGradient>
  );
}

export default BackgroundGradient;
