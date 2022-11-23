import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import { useSelector } from "react-redux";
import CardModule from "../components/CardModule";
import { Content, Footer } from "@mui-treasury/layout";
import { Diversity1Outlined } from "@mui/icons-material";


export default function Modulos() {
  const {
    app: { loading_pag },
  } = useSelector((state) => state);

  if (loading_pag) {
    return null;
  }

  return (
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

  );
}
