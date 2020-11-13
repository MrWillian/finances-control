import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  padding: 15px 1px;
`;

export const Scroll = styled.ScrollView`
  height: 90%;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  
  width: 100%;
  margin: -20px 12px 10px 12px;
`;

export const Label = styled.Text`
  color: #FFF;
`;
