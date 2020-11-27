import React from 'react';
import { ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoryGradient from '../Gradients/CategoryGradient';

import { CategoryBalance } from '../../../core/lib/adapters/redux/store/ducks/balance';

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

interface Props {
  categories?: CategoryBalance[];
}

const TransactionsForCategory: React.FC<Props> = ({ categories }) => {

  const iconNameResolve = (name: string) => {
    switch(name) {
      case 'Comida':
        return 'fast-food';
      case 'Entretenimento': 
        return 'game-controller';
      default:
        return 'md-list-circle';
    }
  }

  return (
    <Container>
      <Header>
        <Label>Movimentações por Categoria</Label>
        <LinkToAll>
          <Label>Todas</Label>
          {/* <Icon name="ios-funnel" size={10} color="#C8C8C8" /> */}
        </LinkToAll>
      </Header>

      <ScrollView>
        {categories && categories.length > 0 ?
          categories.map((category: CategoryBalance, index) => 
            <TransactionsForCategoryCard key={index}>
              <CategoryGradient>
                <CategoryIcon>
                  <Icon name={iconNameResolve(category.name)} size={20} color="#FFF" />
                </CategoryIcon>
              </CategoryGradient>

              <CategoryName>{category.name}</CategoryName>
              <CategoryValue>{category.name === 'Lucro' ? '+' : '-'} R$ {category.total}</CategoryValue>
            </TransactionsForCategoryCard>  
          )
          : 
          <Text style={{fontFamily: 'Comfortaa-SemiBold', color: '#FFF', marginTop: 15}}>
            Nenhuma movimentação criada...
          </Text>
        }
      </ScrollView>

    </Container>
  );
}

export default TransactionsForCategory;