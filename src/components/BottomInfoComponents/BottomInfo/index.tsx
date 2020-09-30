import React from 'react';

import { Container } from './styles';

const BottomInfo: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default BottomInfo;
