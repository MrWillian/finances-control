import React, { useEffect, useState } from 'react';

import { Container, Message } from './styles';

interface Props {
  message?: string;
  type?: MessageType;
}

enum MessageType { 'success', 'error', 'info' }

export const FlashMessage: React.FC<Props> = ({ message, type }) => {
  const [visible, setVisible] = useState(true)
  const DISPLAY_TIME = 3000;

  const closeFlashMessage = () => setVisible(false);

  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}

export function showMessage(props: Props) {
  return <FlashMessage message={props.message} />
}
