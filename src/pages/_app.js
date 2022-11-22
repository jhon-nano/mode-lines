import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ConfirmProvider } from "material-ui-confirm";
import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { createRef } from "react";
//COMPONENTS
import createEmotionCache from "../lib/createEmotionCache";

//AWS
import { Close } from "@mui/icons-material";
import { Collapse, Container, IconButton } from "@mui/material";
import { SnackbarProvider } from "notistack";
/* Redux Store */
import { Provider } from "react-redux";
import { store, wrapper } from "../store/store";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import palette from "../lib/theme";

import LayoutApp from "../layouts/LayoutApp";

import "../styles/globals.css";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    user,
  } = props;

  const notistackRef = createRef();

  const router = useRouter();

  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  const pathnames = router.pathname.split("/").filter((x) => x);

  let theme = createTheme({
    mode: "dark",
    ...palette,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Mode Lines - Error Page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ConfirmProvider>
          <SnackbarProvider
            dense={false}
            maxSnack={2}
            preventDuplicate
            ref={notistackRef}
            autoHideDuration={3000}
            action={(key) => (
              <IconButton onClick={onClickDismiss(key)}>
                <Close />
              </IconButton>
            )}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            TransitionComponent={Collapse}
          >
            <Provider store={store}>
              <Container
                maxWidth="xl"
                sx={{
                  background: "#FFAE00",
                  backgroundImage: `url(img/waves.svg)`,
                  height: "100vh",
                }}
              >
            
                  <LayoutApp {...props} pathnames={pathnames}>
                    <Component {...props} {...pageProps} />

                    <div className="background-shapes"></div>
                  </LayoutApp>
            
              </Container>
            </Provider>
          </SnackbarProvider>
        </ConfirmProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
  user: PropTypes.object,
};

export default wrapper.withRedux(MyApp);
