import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CategoryGradient: React.FC = ({children}) => {
  return (
    <LinearGradient 
      colors={[
        '#222f52',
        '#1B2540',
        '#131d36',
      ]}
      style={{ 
        alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 50 
      }}>
      {children}
    </LinearGradient>
  );
}

export default CategoryGradient;
