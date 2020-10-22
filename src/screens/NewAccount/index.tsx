import React from 'react';

import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import SheetForm from '../../components/SheetForm';

import { Content } from './styles';

const NewAccount: React.FC = () => {
  return (
    <BackgroundGradient>
      <Header />

      <Content>
        <SheetForm />
      </Content>

    </BackgroundGradient>
  );
}

export default NewAccount;