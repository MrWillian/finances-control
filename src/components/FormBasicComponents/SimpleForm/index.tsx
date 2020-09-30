import React from 'react';

import { Container } from './styles';

const SimpleForm: React.FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default SimpleForm;