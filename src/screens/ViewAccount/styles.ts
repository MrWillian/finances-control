import styled from 'styled-components/native';

export const Content = styled.SafeAreaView`
  padding: 30px;
`;

export const LabelContainer = styled.View`
  margin: 15px 0;
`;

export const Label = styled.Text`
  color: #FFF;
  font-family: 'Comfortaa-Bold';
  font-size: 18px;
  text-decoration: underline;
`;

export const Font = styled.Text`
  color: #FFF;
  font-family: 'Comfortaa-SemiBold';
  font-size: 14px;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  
  margin: 30px 0;
  padding: 10px;
  background-color: rgba(0,0,0,0.2);
  border-radius: 5px;
  elevation: 1;
`;

export const BackButtonLabel = styled.Text`
  font-family: 'Comfortaa-Bold';
  font-size: 20px;
  text-decoration: underline;
  color: #FFF;
  margin-left: 10px;
`;
