import React from 'react';
import { BackgroundGradient } from '../../components/Gradients';
import Header from '../../components/Header';
import MenuBottom from '../../components/MenuBottom';
import { iNavigationProps } from '../../utils';

import { Content, Scroll, Title, SubTitle, Paragraph, Bold, Underline } from './styles';

const Settings: React.FC<iNavigationProps> = ({navigation}) => {
  return (
    <BackgroundGradient>
      <Header navigation={navigation} />

      <Content>
        <Scroll>
          <Title>Políticas de Privacidade</Title>

          <Paragraph>
            Nós, da <Bold>Mr. Code</Bold>, estamos comprometidos em resguardar sua privacidade. O intuito deste 
            documento é esclarecer quais informações são coletadas dos usuários de nosso Aplicativo, o FinApp. 
            A <Bold>Mr. Code</Bold> reconhece que a sua privacidade é muito importante, portanto, tomamos todas as 
            medidas possíveis para protegê-la. Nesse sentido, a presente Política de Privacidade visa lhe informar 
            como as suas informações e dados serão coletados, usados, compartilhados e armazenados por meio do
            nosso aplicativo e respectivos serviços.
          </Paragraph>

          <Paragraph>
            A aceitação da nossa Política será feita quando você se cadastrar em nossa plataforma, mesmo que de forma 
            gratuita. Isso indicará que você está ciente e em total acordo com a forma como utilizaremos as suas 
            informações e seus dados.
          </Paragraph>

          <Paragraph>
            Caso não concorde com esta Política, por favor, não continue o seu procedimento de registro e não use os 
            nossos serviços. Todavia, por favor, nos informe a sua discordância para que possamos melhorá-los.
          </Paragraph>

          <Paragraph>
            Qualquer dúvida em relação à nossa política de privacidade pode ser esclarecida entrando em contato conosco.
            Além de qualquer contato para nos informar sua discordância.
          </Paragraph>
          <Paragraph>
            Envie um e-mail para <Underline>williansoares.dev@gmail.com</Underline>.
          </Paragraph>

          <Paragraph />
          
          <SubTitle>1. Coleta de dados</SubTitle>

          <Paragraph>
            Nós coletamos algumas informações de identificação pessoal para o seu registro no aplicativo, essas 
            informações incluem, nome, telefone e e-mail, além de sua senha para acesso, cuja esta, aconselhamos
            que seja segura, por exemplo, que ela tenha códigos aleatórios, ter ao menos um número, uma letra e um
            símbolo, e não utilizar uma sequência ou nomes próprios.
            {/* Eventualmente, a solicitação de algumas informações pode ser feita por meio de contato direto da 
            <Bold>Mr. Code</Bold> com os usuários via e-mail ou telefone. */}
          </Paragraph>

          <Paragraph>
            Ainda coletamos alguns dados na utilização de nossos serviços, como nome e valor de contas bancárias, 
            porém, lembrando que, são informações que não são compartilhadas com ninguém, e são armazenadas apenas para
            o seu controle financeiro no app, além de não consultarmos nenhum banco ou instituição sobre a veracidade
            delas, ou seja, é algo meramente ilustrativo para você utilizar o nosso serviço.
          </Paragraph>

        </Scroll>
      </Content>

      <MenuBottom activePage={'PrivacyPolicy'} />
    </BackgroundGradient>
  );
}

export default Settings;
