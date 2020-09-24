import React from 'react';

import { 
  Container, ItemsContainer, ItemButton, ItemLabel, Bottom, LogoutButton, LogoutButtonLabel
} from './styles';

const CustomDrawer: React.FC = () => {
  const items = [
    "Meus Objetivos", 
    "Metas de despesas",
    "Relatórios",
    "Minhas conquistas",
    "Preferências"
  ];

  // const redirect = (item) => {
  //   console.log("Redirect...", item);
  // }

  const logout = () => {
    console.log("Logout...");
  }

  return (
    <Container>
      <ItemsContainer>
        {items.map((item) => {
          return (
            <ItemButton>
              <ItemLabel>{item}</ItemLabel>
            </ItemButton>
          );
        })}
      </ItemsContainer>
      <Bottom>
        <LogoutButton onPress={logout}>
          <LogoutButtonLabel>
            Sair
          </LogoutButtonLabel>
        </LogoutButton>
      </Bottom>
    </Container>
  );
}

export default CustomDrawer;