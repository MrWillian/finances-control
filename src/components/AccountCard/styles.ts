import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 2.5px 0;
  padding: 5px 0;
  border-radius: 5px;
`;

export const DeleteContainer = styled.View`
  position: absolute;
  right: 0;
  width: 20%;
  
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
`;

export const Card = Animated.createAnimatedComponent(styled.View`
  position: relative;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`);

export const AccountInfo = styled.View`
  display: flex;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Comfortaa-Regular';
  font-weight: bold;
  font-size: 12px;
  color: #424E71;
  elevation: 10;
  margin: 2px 0;
`;

export const Value = styled.Text`
  font-family: 'Comfortaa-SemiBold';
  font-weight: bold;
  color: #FDFDFD;
`;

export const See = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: center;
  elevation: 10;

  border-radius: 5px;
  padding: 8px;
  background-color: #6269F1;
`;

export const SeeLabel = styled.Text`
  font-family: 'Comfortaa-Medium';
  font-size: 12px;
  color: #FDFDFD;
`;
