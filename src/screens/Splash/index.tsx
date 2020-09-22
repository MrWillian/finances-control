import React from 'react';
import Loading from '../../components/Loading';
import { Container } from './styles';

const Splash: React.FC = () => {
  return (
    <Container>
      <Loading />
    </Container>
  );
}

export default Splash;
