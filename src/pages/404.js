import {
  Box,
  Button, Stack,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";

export default function ErrorPage() {
  const router = useRouter();

  const theme = useTheme();
  const breakpoints_xs = useMediaQuery(theme.breakpoints.up("sm"));

  function LogoApp() {
    return (
      <Image
        src="/img/404.webp"
        alt="CodeLines Logo"
        width={325}
        height={325}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    );
  }

  function Texto() {
    return (
      <Stack>
        <Typography
          component="h2"
          variant="h2"
          align="right"
          color="red"
          gutterBottom
        >
          <b>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(1500).typeString("¡¡UPS!!").start();
              }}
            />
          </b>
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          align="right"
          color="white"
          gutterBottom
        >
          <b>ERROR DE PAGINA</b>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          align="right"
          color="white"
          gutterBottom
        >
          Esta no es la pagina que buscas
        </Typography>
      </Stack>
    );
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {!breakpoints_xs ? (
        <Grid item xs={1} sm={0} md={0} lg={0} xl={0} />
      ) : null}

      <Grid xs={9} sm={6} md={6} lg={6} xl={6}>
        <Texto />
        <Box display={"flex"}>
          <Box flexGrow={1} />
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/")}
          >
            INICIO
          </Button>
        </Box>
      </Grid>
      {!breakpoints_xs ? <Grid xs={1} sm={0} md={0} lg={0} xl={0} /> : null}

      <Grid xs={12} sm={6} md={5} lg={5} xl={5}>
        <LogoApp />
      </Grid>
    </Grid>
  );
}
