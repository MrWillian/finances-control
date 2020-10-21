import React from 'react';
import { Text } from 'react-native';

import ExpensesList from '../../components/ExpensesList';
import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';

import { StorageController } from '../../controllers';

import { Content } from './styles';

const Stats: React.FC = () => {
  let storageController = new StorageController();

  return (
    <BackgroundGradient>
      <Header />
      
      <Content>
        <Text style={{ 
          fontFamily: 'Comfortaa-SemiBold', 
          fontSize: 18, 
          alignSelf: 'flex-start', 
          paddingBottom: 10, 
          paddingLeft: 30, 
          paddingRight: 30, 
          color: '#FDFDFD' 
        }}>Despesas</Text>
        <ExpensesList expensesList={[
          { id: '1', title: 'Expense 1', description: 'Expense 1 description', value: 1.005},
          { id: '2', title: 'Expense 2', description: 'Expense 2 description', value: 2.005},
          { id: '3', title: 'Expense 3', description: 'Expense 3 description', value: 3.005},
          { id: '4', title: 'Expense 4', description: 'Expense 4 description', value: 4.005},
          { id: '5', title: 'Expense 5', description: 'Expense 5 description', value: 5.005},
          { id: '6', title: 'Expense 6', description: 'Expense 6 description', value: 6.005},
          { id: '7', title: 'Expense 7', description: 'Expense 7 description', value: 7.005},
          { id: '8', title: 'Expense 8', description: 'Expense 8 description', value: 8.005},
          { id: '9', title: 'Expense 9', description: 'Expense 9 description', value: 9.005},
          { id: '10', title: 'Expense 10', description: 'Expense 10 description', value: 10.005},
        ]} />
      </Content>

      <MenuBottom activePage={'Stats'} />
    </BackgroundGradient>
  );
}

export default Stats;
