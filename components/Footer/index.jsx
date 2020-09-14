import React from 'react';

import { Container } from './styles';
import { Link } from 'components/Link';

function Footer() {
  return (
    <Container>
      <Link
        href="https://filipecheverrya.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by Filipe Echeverrya
        <img
          src="https://filipecheverrya.github.io/logo192.png"
          alt="Filipe logo"
        />
      </Link>
    </Container>
  );
}

export { Footer };