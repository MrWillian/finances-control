import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  }
})`
  padding: 10px 10px;
  
  background: #2D142C;
`;
