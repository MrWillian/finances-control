import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const MenuBottomGradient: React.FC = ({ children }) => {
  return (
    <LinearGradient
      colors={['rgba(27, 37, 64, 0.05)', 'rgba(27, 37, 64, 0.8)', 'rgba(27, 37, 64, 0.9)', 'rgba(27, 37, 64, 1)']}
      style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
      {children}
    </LinearGradient>
  );
}

export default MenuBottomGradient;
