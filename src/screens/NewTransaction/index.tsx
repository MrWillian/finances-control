import React from 'react';

import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import TransactionForm from '../../components/TransactionForm';

import { Content } from './styles';

const NewTransaction: React.FC = () => {
  return (
    <BackgroundGradient>
      <Header />

      <Content>
        <TransactionForm />
      </Content>

    </BackgroundGradient>
  );
}

export default NewTransaction;
