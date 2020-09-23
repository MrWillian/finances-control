import React from 'react';

import { Container, Image, ProgressBar, ProgressBarLine, Label } from './styles';


const Loading: React.FC = () => {
  return (
    <Container>
      <Image 
        source={ require('../../assets/splash-mcduck.png')} 
        resizeMode="contain" />
      <ProgressBar>
        <ProgressBarLine />
      </ProgressBar>
      {/* <Label>65%</Label> */}
    </Container>
  );
}

export default Loading;
