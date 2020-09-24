import React from 'react';
import Accounts from '../../components/Accounts';
import Header from '../../components/Header';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Accounts />
    </Container>
  );
}

export default Main;