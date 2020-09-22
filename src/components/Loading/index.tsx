import React from 'react';

import { Container, ProgressBar, ProgressBarLine, Label } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <ProgressBar>
        <ProgressBarLine />
      </ProgressBar>
      <Label>65%</Label>
    </Container>
  );
}

export default Loading;