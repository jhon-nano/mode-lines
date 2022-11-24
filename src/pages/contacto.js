import {
  Grid,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
import { FormContact } from "../components/FormContact";

export default function Home() {
  const {
    app: { loading_pag },
  } = useSelector((state) => state);

  const methods = useForm();

  const { handleSubmit, setValue } = methods;

  function LogoApp() {
    return (
      <Image
        src="/img/contact.webp"
        alt="CodeLines Logo"
        width={255}
        height={255}
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
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Stack alignContent={"end"} alignItems="end">
          <Typography
            component="h2"
            variant="h3"
            align="right"
            color="white"
            gutterBottom
          >
            <Typography
              component="h2"
              variant="h2"
              align="right"
              color="white"
              gutterBottom
            >
              <b>
                <Typewriter
                  options={{
                    autoStart: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(1500).typeString("CONTACTO").start();
                  }}
                />
              </b>
            </Typography>
          </Typography>
        </Stack>
      </Slide>
    );
  }

  if (loading_pag) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>CodeLines WEB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={3}
        sx={{ padding: 1 }}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Texto />
          <FormProvider {...methods}>
            <form>
              <FormContact />
            </form>
          </FormProvider>
        </Grid>
        <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
          <LogoApp />
        </Grid>
      </Grid>
    </div>
  );
}
