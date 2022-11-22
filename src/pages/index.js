import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
import styles from "../styles/Home.module.css";

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  height: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: transparent;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  border-radius: 12px;

  `
);

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

export default function Home() {
  const {
    app: { tabValue },
  } = useSelector((state) => state);

  const theme = useTheme();
  const breakpoints_xs = useMediaQuery(theme.breakpoints.up("sm"));

  function LogoApp() {
    return (
      <Image
        src="/img/logo60wi.webp"
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
                    typewriter.pauseFor(1500).typeString("CODE LINES").start();
                  }}
                />
              </b>
            </Typography>
            <Typography
              component="h5"
              variant="h5"
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
                    typewriter
                      .pauseFor(1500)
                      .typeString("APLICACIONES")
                      .start();
                  }}
                />
              </b>
            </Typography>

            <Typewriter
              options={{
                loop: true,
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2500)
                  .typeString("EN LA NUBE")
                  .pauseFor(7500)
                  .deleteAll()
                  .start();
              }}
            />
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(4500)

                  .typeString("ADAPTABLES")
                  .pauseFor(5500)
                  .deleteAll()
                  .start();
              }}
            />
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(6500)
                  .typeString("ESCALABLES")
                  .pauseFor(3500)
                  .deleteAll()
                  .start();
              }}
            />
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(8500)
                  .typeString("MÁS RÁPIDAS")
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </Typography>
        </Stack>
      </Slide>
    );
  }

  return (
    <div className={styles.container}>
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
        <Grid item xs={9} sm={7} md={7} lg={7} xl={7}>
          {breakpoints_xs ? <Texto /> : <LogoApp />}
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          {breakpoints_xs ? <LogoApp /> : <Texto />}
        </Grid>

      
      </Grid>
    </div>
  );
}
