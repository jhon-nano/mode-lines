import { useEffect } from "react";
import {
  Content,
  getContentBasedScheme,
  Header,
  Root,
} from "@mui-treasury/layout";
import { Backdrop, Fade, Typography } from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import AppBarHeader from "../components/AppBarHeader";
import { loadingPagina, stopLoadingPagina } from "../store/actions/app";
import zIndex from "@mui/material/styles/zIndex";

const scheme = getContentBasedScheme();

export default function LayoutApp({ children }) {
  //console.log(pathnames)
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    app: { loading_pag, loading_pag_message },
  } = useSelector((state) => state);

  useEffect(() => {
    router?.events.on("routeChangeStart", (url, { shallow }) => {
      ////console.log(
      //  `App is routeChangeStart to ${url} ${shallow ? "with" : "without"
      //  } shallow routing`
      //);
      dispatch(loadingPagina("CARGANDO PAGINA"));
    });
    router?.events.on("routeChangeComplete", (url, { shallow }) => {
      ////console.log(
      //  `App is routeChangeComplete to ${url} ${shallow ? "with" : "without"
      //  } shallow routing`
      //);
      setTimeout(() => {
        dispatch(stopLoadingPagina("COMPLETADO"));
      }, 2000);
    });
    router?.events.on("routeChangeError", (url, { shallow }) => {
      ////console.log(
      //  `App is routeChangeError to ${url} ${shallow ? "with" : "without"
      //  } shallow routing`
      //);
      dispatch(stopLoadingPagina("ERROR PAGINA"));
    });

    return () => {
      router?.events.off("routeChangeStart", () => {
        console.log("stoped routeChangeStart");
      });
      router?.events.off("routeChangeComplete", () => {
        console.log("stoped routeChangeComplete");
      });
      router?.events.off("routeChangeError", () => {
        console.log("stoped routeChangeError");
      });
    };
  }, [router?.events]);

  return (
    <div className="box">
      <Root scheme={scheme}>
        <Header sx={{ background: "transparent" }}>
          <AppBarHeader />
        </Header>

        <Content>
          <Fade
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 2000 }}
          >
            <Box
              sx={{
                padding: 1,
                overflow: 'auto',
                zIndex: 2000
              }}
            >
              {children}
            </Box>
          </Fade>
        </Content>

        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          transitionDuration={{ appear: 1000, enter: 1000, exit: 1000 }}
          open={loading_pag}
        >
          <Box
            sx={{
              textTransform: "uppercase",
              textAlign: "center",
              alignContent: "center",
              alignItems: "center",
              flexDirection: "column",
              fontFamily: "Monospace",
            }}
          >
            <CircularProgress
              size={100}
              disableShrink
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.light
                    : theme.palette.primary.dark,
                animationDuration: "1000ms",
                left: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: "round",
                },
              }}
              thickness={4}
            />
            <Typography
              component="div"
              gutterBottom
              variant="h6"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.light
                    : theme.palette.primary.dark,
                background: "white",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <b>{loading_pag_message}</b>
            </Typography>
          </Box>
        </Backdrop>
      </Root>
      <div className="background-shapes"></div>
    </div>
  );
}
