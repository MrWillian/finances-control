import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const DrawerGradient: React.FC = ({ children }) => {
  return (
    <LinearGradient
      colors={[
        'rgba(27, 37, 64, 1)', 
        'rgba(27, 37, 64, 0.9)',
      ]}
      style={{ flex:1 }}>
      {children}
    </LinearGradient>
  );
}

export default DrawerGradient;
