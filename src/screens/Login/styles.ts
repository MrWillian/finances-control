import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #2D142C;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #FFF;
  font-family: 'Glegoo';
  font-size: 18px;
  elevation: 20;
`;

export const Form = styled.SafeAreaView`
  padding: 15px 1px;
`;

export const SignUpInfo = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  padding: 10px;
`;

export const Font = styled.Text`
  color: #FFF;
  font-family: 'Glegoo';
  font-size: 14px;
  elevation: 20;
  letter-spacing: 1px;
`;

export const Link = styled.TouchableOpacity`

`;

export const LinkLabel = styled.Text`
  color: #FFD700;
  font-family: 'Glegoo';
  margin-left: 10px;
  text-decoration: underline;
  elevation: 20;
  letter-spacing: 1px;
`;
