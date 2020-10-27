import React, { RefObject, useRef } from 'react';
import { 
  PanResponder, Dimensions, UIManager, LayoutAnimation, View, PanResponderGestureState, Alert 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, DeleteContainer, Card, AccountInfo, Title, Value, See, SeeLabel } from './styles';

interface Props {
  id: number;
  title: string;
  value: string;
  handleDelete(id: number): void;
}

const AccountCard: React.FC<Props> = ({ id, title, value, handleDelete }) => {
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
    onPanResponderGrant: (event, gestureState) => {
      deleteRef.current?.setNativeProps({ x: gestureState.dx + 120 });
      
    },
    onPanResponderTerminate: (event, gestureState) => { onPanResponder(gestureState); },
    onPanResponderRelease: (event, gestureState) => { onPanResponder(gestureState); },
  });

  const onMoveX = (dx: number) => {
    cardRef.current?.setNativeProps({style: { transform: [{ translateX: dx }] }});
    deleteRef.current?.setNativeProps({style: { transform: [{translateX: dx+140}] }});
  }

  const onPanResponder = (gestureState: PanResponderGestureState) => {
    const windowWidth = Dimensions.get('window').width;
    if (Math.abs(gestureState.dx) < windowWidth/2) {
      cardRef.current?.setNativeProps({style: { transform: [{ translateX: 0 }]} });
      deleteRef.current?.setNativeProps({style: {transform: [{ translateX: 0 }]} });
    }
    
    if (Math.abs(gestureState.dx) >= windowWidth/2) {
      LayoutAnimation.configureNext(LayoutAnimation.create(300, 'easeInEaseOut', 'opacity'));
      cardRef.current?.setNativeProps({style: { transform: [{ translateX: windowWidth }]} });
      deleteRef.current?.setNativeProps({style: {transform:[{ translateX: -(windowWidth/4) }]}});
      handleDeleteAccount(id);
    }
  }

  const handleSeeAccount = () => {}

  const handleDeleteAccount = (id: number) => {
    Alert.alert(
      'Alerta', `Tem certeza que deseja excluir a conta '${title}'?`, [
        { text: 'Sim', style: "default", onPress: () => handleDelete(id) },
        { text: 'Não', style: "cancel", onPress: () => {
          cardRef.current?.setNativeProps({style: { transform: [{ translateX: 0 }]} });
          deleteRef.current?.setNativeProps({style: { transform: [{ translateX: 0 }]} });
        }}
      ]
    );
  };

  return (
    <Container>
      <DeleteContainer ref={deleteRef}>
        <Icon name="trash-o" size={20} color="#E97A8B" />
        {/* <Title>Deletar conta</Title> */}
      </DeleteContainer>
      <Card ref={cardRef} {...panResponder.panHandlers}>
        <AccountInfo>
          <Title>{title}</Title>
          <Value>{value}</Value>
        </AccountInfo>
        <See onPress={handleSeeAccount}>
          <SeeLabel>Visualizar</SeeLabel>
        </See>
      </Card>
    </Container>
  );
}

export default AccountCard;
