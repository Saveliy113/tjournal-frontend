//REACT, NEXT
import type { AppProps } from 'next/app';
import Head from 'next/head';

//COMPONENTS
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

//CSS
import { theme } from '../theme';
import 'macro-css';
import '../styles/globals.scss';
import { Header } from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <Header />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}
