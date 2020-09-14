import GlobalStyle from 'styles/global';

function MyApp({ Component, pageProps }) {
  
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
