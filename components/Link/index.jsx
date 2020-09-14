import React from 'react';

import { Container } from './styles';

function Link({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}

export { Link };