import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, Form, SignUpInfo, Font, Link, LinkLabel } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Title>Faça login com seu email e senha...</Title>
      <Form>
        <Input name="Email" icon="mail" />
        <Input name="Senha" icon="lock" />
        <Button name="Entrar" />
      </Form>
      <SignUpInfo>
        <Font>Não tem uma conta?</Font>
        <Link>
          <LinkLabel>
            Criar!
          </LinkLabel>
        </Link>
      </SignUpInfo>
    </Container>
  );
}

export default Login;