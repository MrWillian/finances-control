import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Account } from '../../../core/lib/adapters/redux/store/ducks/accounts/types';
import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';

import { Content, LabelContainer, Label, Font, BackButton, BackButtonLabel } from './styles';
import { formatNumber } from '../../utils/format';

interface Props {
  account: Account;
  route: {
    params: {
      params: Account
    }
  }
}

const ViewAccount: React.FC<Props> = (account) => {
  const [accountTemp, setAccountTemp] = useState<Account>(account.route.params.params);
  const navigation = useNavigation();

  return (
    <BackgroundGradient>
      <Header />

      <Content>
        <LabelContainer>
          <Label>Nome da conta:</Label>
          <Font>{accountTemp.name}</Font>
        </LabelContainer>
        <LabelContainer>
          <Label>Descrição da conta:</Label>
          <Font>{accountTemp.description}</Font>
        </LabelContainer>
        <LabelContainer>
          <Label>Valor Total na conta:</Label>
          <Font>{formatNumber(+accountTemp.amount)}</Font>
        </LabelContainer>

        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="#FFF" />
          <BackButtonLabel>Voltar</BackButtonLabel>
        </BackButton>
      </Content>

    </BackgroundGradient>
  );
}

export default ViewAccount;