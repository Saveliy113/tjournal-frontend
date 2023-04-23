import type { AppProps } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

//CSS
import { theme } from '../theme';
import 'macro-css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}
