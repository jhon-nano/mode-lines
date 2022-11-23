import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import CardModule from "../components/CardModule";
import { Content, Footer } from "@mui-treasury/layout";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Modulos() {
  const {
    app: { loading_pag },
  } = useSelector((state) => state);

  if (loading_pag) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Content
        sx={{
          width: "100%",
          height: "50%",
        }}
      >
        <Grid container spacing={1} sx={{ height: "100%" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid container spacing={3}>
              {Array.from(new Array(9)).map((dato, i, array) => (
                <Grid key={i} item xs={6} sm={4} md={3} lg={3} xl={3}>
                  <CardModule />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Content>
      <Footer
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "80px",
          color: "white",
          padding: 2
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>© Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>Link A</Item>
            </Grid>
            <Grid>
              <Item>Link B</Item>
            </Grid>
            <Grid>
              <Item>Link C</Item>
            </Grid>
          </Grid>
        </Grid>
      </Footer>
    </div>
  );
}
