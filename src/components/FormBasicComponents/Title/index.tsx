import React from 'react';

import { Text } from './styles';

interface Props {
  style?: {}
}

const Title: React.FC<Props> = ({ style, children }) => {
  return (
    <Text style={style}>
      {children}
    </Text>
  );
}

export default Title;
