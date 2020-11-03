import React, { RefObject, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  PanResponder, Dimensions, UIManager, LayoutAnimation, View, PanResponderGestureState, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Account } from '../../../core/lib/adapters/redux/store/ducks/accounts/types';

import { Container, DeleteContainer, Card, AccountInfo, Title, Value, See, SeeLabel } from './styles';

interface Props {
  account: Account;
  handleDelete(id?: number): void;
}

const AccountCard: React.FC<Props> = ({ account, handleDelete }) => {
  const navigation = useNavigation();
  const cardRef: RefObject<View> = useRef(null);
  const deleteRef: RefObject<View> = useRef(null);

  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onStartShouldSetPanResponderCapture: () => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => {
      return (gestureState.dx > 2 || gestureState.dx < -2 || gestureState.dy > 5 || gestureState.dy < -5);
    },
    onPanResponderMove: (event, gestureState) => { onMoveX(gestureState.dx); },
    onPanResponderTerminate: (event, gestureState) => { onPanResponder(gestureState); },
    onPanResponderRelease: (event, gestureState) => { onPanResponder(gestureState); },
  });

  const onMoveX = (dx: number) => setRefsTranslateX(dx, dx+140);
  
  const onPanResponder = (gestureState: PanResponderGestureState) => {
    const windowWidth = Dimensions.get('window').width;
    if (Math.abs(gestureState.dx) < windowWidth/2) 
      setRefsTranslateX(0, 0);
    
    if (Math.abs(gestureState.dx) >= windowWidth/2) {
      LayoutAnimation.configureNext(LayoutAnimation.create(300, 'easeInEaseOut', 'opacity'));
      setRefsTranslateX(windowWidth, -(windowWidth/4));
      handleDeleteAccount();
    }
  }

  const setRefsTranslateX = (cardRefX: number, deleteRefX: number) => {
    cardRef.current?.setNativeProps({style: { transform: [{ translateX: cardRefX }]} });
    deleteRef.current?.setNativeProps({style: {transform:[{ translateX: deleteRefX }]}});
  }

  const handleSeeAccount = () => navigation.navigate('ViewAccount', { params: account });

  const handleDeleteAccount = () => {
    Alert.alert(
      'Alerta', `Tem certeza que deseja excluir a conta '${account.name}'?`, [
        { text: 'Sim', style: "default", onPress: () => handleDelete(account.id) },
        { text: 'Não', style: "cancel", onPress: () => setRefsTranslateX(0, 0) }
      ]
    );
  };

  return (
    <Container>
      <DeleteContainer ref={deleteRef}>
        <Icon name="trash-o" size={20} color="#E97A8B" />
      </DeleteContainer>
      <Card ref={cardRef} {...panResponder.panHandlers}>
        <AccountInfo>
          <Title>{account.name}</Title>
          <Value>{account.amount}</Value>
        </AccountInfo>
        <See onPress={handleSeeAccount}>
          <SeeLabel>Visualizar</SeeLabel>
        </See>
      </Card>
    </Container>
  );
}

export default AccountCard;
