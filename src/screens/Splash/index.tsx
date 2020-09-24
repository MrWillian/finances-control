import React, { useEffect } from 'react';
import Loading from '../../components/Loading';
import { iNavigationProps } from '../../utils/iNavigationProps';
import { Container } from './styles';

const Splash: React.FC<iNavigationProps> = ({ navigation }) => {

  useEffect(() => {
    setTimeout(function(){
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <Container>
      <Loading />
    </Container>
  );
}

export default Splash;
