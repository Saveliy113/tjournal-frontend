//REACT, NEXT
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store, wrapper } from '@/redux/store';

//COMPONENTS
import { Header } from '@/components/Header';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

//CSS
import { theme } from '../theme';
import 'macro-css';
import '../styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        {/* <Provider store={store}> */}
        <Header />
        <Component {...pageProps} />
        {/* </Provider> */}
      </MuiThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
