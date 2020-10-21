import React from 'react';

import { Container, CategoryIndicator, ExpenseInfoContainer, ExpenseTitle, ExpenseValue } from './styles';

export interface Expense {
  id: string;
  title: string;  
  description: string;
  value: number;
}

const ExpensesItem: React.FC<Expense> = ({ id, title, description, value }) => {
  return (
    <Container>
      <CategoryIndicator />
      <ExpenseInfoContainer>
        <ExpenseTitle>{title}</ExpenseTitle>
        <ExpenseValue>R$ {value}</ExpenseValue>
      </ExpenseInfoContainer>
    </Container>
  );
}

export default ExpensesItem;
