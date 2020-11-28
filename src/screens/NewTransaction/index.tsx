import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import TransactionForm from '../../components/TransactionForm';

import { Content } from './styles';

const NewTransaction: React.FC = () => {
  const navigation = useNavigation();
  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <Content>
        <TransactionForm />
      </Content>

    </BackgroundGradient>
  );
}

export default NewTransaction;
