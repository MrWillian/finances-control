import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import SheetForm from '../../components/SheetForm';

import { Content } from './styles';

const NewAccount: React.FC = () => {
  const navigation = useNavigation();
  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <Content>
        <SheetForm />
      </Content>

    </BackgroundGradient>
  );
}

export default NewAccount;