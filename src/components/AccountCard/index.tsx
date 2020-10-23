import React, { RefObject, useRef } from 'react';
import { PanResponder, Dimensions, UIManager, LayoutAnimation, View, PanResponderGestureState } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, DeleteContainer, Card, AccountInfo, Title, Value, See, SeeLabel } from './styles';

interface Props {
  title : string;
  value : string;
}

const AccountCard: React.FC<Props> = ({ title, value }) => {
  const tasks: RefObject<View> = useRef(null);
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onStartShouldSetPanResponderCapture: () => false,
    // onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => {
      const { dx, dy } = gestureState;
      return (dx > 2 || dx < -2 || dy > 5 || dy < -5);
    },
    onPanResponderMove: (event, gestureState) => {
      onMoveX(gestureState.dx);
    },
    onPanResponderTerminate: (event, gestureState) => {
      onPanResponderRealease(gestureState);
    },
    onPanResponderRelease: (event, gestureState) => {
      onPanResponderRealease(gestureState);
    },
  });

  const onMoveX = (dx: number) => {
    if (tasks.current !== null)
      tasks.current.setNativeProps({style: { transform: [{ translateX: dx }] }});
  }

  const onPanResponderRealease = (gestureState: PanResponderGestureState) => {
    if (Math.abs(gestureState.dx) < Dimensions.get('window').width/2) {
      if (tasks.current !== null)
        tasks.current.setNativeProps({style: { transform: [{ translateX: 0 }]} });
    }
    
    if (Math.abs(gestureState.dx) >= Dimensions.get('window').width/2) {
      LayoutAnimation.configureNext(LayoutAnimation.create(300, 'easeInEaseOut', 'opacity'));
      if (tasks.current !== null)
        tasks.current.setNativeProps({style: { transform: [{ translateX: Dimensions.get('window').width }]} });
      // handleDelete()
    }
  }

  const handleSeeAccount = () => {}

  return (
    <Container>
      <DeleteContainer>
        <Icon name="trash-o" size={20} color="#E97A8B" />
      </DeleteContainer>
      <Card ref={tasks} {...panResponder.panHandlers}>
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
