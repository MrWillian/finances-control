import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0;
  padding: 5px;
  border-radius: 5px;
`;

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

export const Divisor = styled.View`
  background-color: #424E71;
  height: 0.5%;
  width: 80%;

  align-self: center;
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
