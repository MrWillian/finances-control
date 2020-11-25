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
          
          <SubTitle>1 - Coleta de dados</SubTitle>

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

          <Paragraph />
          
          <SubTitle>2 - Uso do seus dados pessoais</SubTitle>

          <Paragraph>
            Todos os dados que coletamos são utilizados para a prestação de nossos serviços, e aqui, prezamos muito a 
            sua privacidade. Por isso, todos os seus dados são dados como confidenciais, e só as utilizaremos para os
            fins descritos aqui, e autorizados por você. Ademais, seus dados também podem ser utilizados para criarmos
            novos serviços, produtos e funcionalidades. 
          </Paragraph>

          <Paragraph>
            Para prestar nosso serviço de controle de finanças, nós utilizaremos os dados financeiros informados por 
            você, dados como, suas contas e transações financeiras fornecidas, para assim, você ter armazenado analises
            de ganhos e gastos.
          </Paragraph>

          <Paragraph>
            Eventualmente, poderemos utilizar dados para finalidades não previstas nesta política de privacidade, mas 
            estas estarão dentro das suas legítimas expectativas. O eventual uso dos seus dados para finalidades que 
            não cumpram com essa prerrogativa será feito mediante sua autorização prévia.
          </Paragraph>

          <Paragraph>
            Seu e-mail é utilizado para o registro de seu usuário, e também pode ser usado para envio de Newsletters 
            relacionadas ao mundo das Finanças. Funcionários do FinApp poderão entrar em contato via e-mail ou telefone
            para fazer pesquisas ou apresentar algum de nossos serviços.
          </Paragraph>

          <Paragraph />
          
          <SubTitle>3 - Acesso aos seus dados pessoais</SubTitle>
          
          <Paragraph>
            Todos os seus dados são confidenciais e qualquer usos destes estará de acordo com a presente Política.
            Manteremos os dados e informações somente até quando estas forem necessárias ou relevantes para as 
            finalidades descritas nesta Política, ou em caso de períodos pré-determinados por lei.
          </Paragraph>

          <Paragraph>
            Consideramos a sua privacidade algo muito importante e faremos tudo que estiver ao nosso alcance para
            protegê-la. Todavia, não temos como garantir complemente que todos os dados e informações sobre você em
            nossa plataforma estarão livres de acessos não autorizados, principalmente caso haja compartilhamento
            indevido das credenciais necessárias para acessar a nossa plataforma. Portanto, você é o único responsável
            por manter sua senha de acesso em local seguro e é vedado o compartilhamento desta com terceiros.
          </Paragraph>

          <Paragraph />
          
          <SubTitle>4 - Compartilhamento de dados</SubTitle>

          <Paragraph>
            Não compartilhamos de maneira alguma os seus dados informados.
          </Paragraph>

          <Paragraph />
          
          <SubTitle>5 - Alteração/exclusão de informações pessoais</SubTitle>

          <Paragraph>
            Todos os dados coletados serão excluídos de nossos servidores quando você assim requisitar.
          </Paragraph>

          <Paragraph />

          <SubTitle>6 - Mudanças na Política de Privacidade</SubTitle>
          
          <Paragraph>
            Essa Política de Privacidade pode passar por atualizações. Desta forma, recomendamos visitar periodicamente
            esta página para que você tenha conhecimento sobre as modificações. Caso sejam feitas alterações relevantes
            que ensejem novas autorizações suas, publicaremos uma nova política de privacidade.
            Antes de usar informações para outros fins que não os definidos nesta Política de Privacidade, 
            solicitaremos sua autorização.
          </Paragraph>
          
          <Paragraph />

          <SubTitle>7 - Lei Aplicável</SubTitle>

          <Paragraph>
            Este documento é regido e deve ser interpretado de acordo com as leis da República Federativa do Brasil.
          </Paragraph>
          
        </Scroll>
      </Content>

      <MenuBottom activePage={'Settings'} />
    </BackgroundGradient>
  );
}

export default Settings;
