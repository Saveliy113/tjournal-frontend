//REACT, NEXT
import type { AppProps } from 'next/app';
import { wrapper } from '@/redux/store';
import { UserApi } from '@/utils/api/user';
import { parseCookies } from 'nookies';
import { setUserData } from '@/redux/slices/user';

//COMPONENTS
import { Header } from '@/components/Header';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

//CSS
import { theme } from '../theme';
import 'macro-css';
import '../styles/globals.scss';
import { Api } from '@/utils/api';

function App({ Component, pageProps }: AppProps) {
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

App.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx, Component }) => {
      try {
        const userData = await Api(ctx).user.getMe();

        store.dispatch(setUserData(userData));
      } catch (error) {
        console.log('CTX PATH: ', ctx.asPath);
        if (ctx.asPath === '/write') {
          ctx.res?.writeHead(302, {
            location: '/403',
          });
          ctx.res?.end();
        }
        console.log(error);
      }

      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps({ ...ctx, store })
          : {},
        pathname: ctx.pathname,
      };
    }
);

export default wrapper.withRedux(App);
