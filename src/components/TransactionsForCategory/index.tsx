import React from 'react';
import { ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoryGradient from '../Gradients/CategoryGradient';

import { 
  Container, 
  Header, 
  LinkToAll, 
  Label,
  TransactionsForCategoryCard, 
  CategoryIcon,
  CategoryName,
  CategoryValue,
} from './styles';

const TransactionsForCategory: React.FC = () => {

  const data = [
    { name: "Comida", iconName: "fast-food", value: 130},
    { name: "Entretenimento", iconName: "game-controller", value: 140},
  ];

  return (
    <Container>
      <Header>
        <Label>Movimentações</Label>
        <LinkToAll>
          <Label>Todas</Label>
          <Icon name="ios-funnel" size={10} color="#C8C8C8" />
        </LinkToAll>
      </Header>

      <ScrollView>
        {data.length > 0 ?
          data.map((item, index) => 
            <TransactionsForCategoryCard key={index}>
              <CategoryGradient>
                <CategoryIcon>
                  <Icon name={item.iconName} size={20} color="#FFF" />
                </CategoryIcon>
              </CategoryGradient>

              <CategoryName>{item.name}</CategoryName>
              <CategoryValue>- R$ {item.value}</CategoryValue>
            </TransactionsForCategoryCard>  
          )
          : 
          <Text>Nenhuma movimentação...</Text>
        }
      </ScrollView>

    </Container>
  );
}

export default TransactionsForCategory;