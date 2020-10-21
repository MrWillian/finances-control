import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 15px;

  border-top-width: 0.5px;
  border-top-color: #2A3453;
`;

export const CategoryIndicator = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #EF6090;
  elevation: 10;
`;

export const ExpenseInfoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const ExpenseTitle = styled.Text`
  font-size: 12px;
  font-family: 'Comfortaa-SemiBold';
  color: #59668F;
`;

export const ExpenseValue = styled.Text`
  font-size: 14px;
  font-family: 'Comfortaa-Bold';
  color: #FFF;
`;
