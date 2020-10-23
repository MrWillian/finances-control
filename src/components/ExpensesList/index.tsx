import React, {useState} from 'react';
import { FlatList } from 'react-native';
import ExpensesItem, { Expense } from '../ExpensesItem';

export interface Props {
  expensesList: Expense[];
}

const ExpensesList: React.FC<Props> = ({expensesList}) => {
  const [expenses, setExpenses] = useState<Expense[]>(expensesList);

  const keyExtractor = (item: Expense) => item.id;

  const renderItem = ({ item }: {item: Expense}) => (
    <ExpensesItem 
      id={item.id} 
      title={item.title} 
      description={item.description} 
      value={item.value} 
    />
  );

  return (
    <FlatList<Expense>
      data={expenses}
      renderItem={renderItem}
      keyExtractor={keyExtractor} 
      style={{ flex: 1, width: '100%', paddingLeft: 20, paddingRight: 20}}
    />
  );
}

export default ExpensesList;
