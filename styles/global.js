import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}

main {
  height: calc(100vh - 100px);
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

`;
