import React from 'react';
import Accounts from '../../components/Accounts';
import Header from '../../components/Header';

import { iNavigationProps } from '../../utils/iNavigationProps';

import { Container } from './styles';

const Main: React.FC<iNavigationProps> = ({ navigation }) => {
  return (
    <Container>
      <Header navigation={navigation} />
      <Accounts />
    </Container>
  );
}

export default Main;
