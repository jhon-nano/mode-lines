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
    
        }}
      >

            <Grid container >
              {Array.from(new Array(9)).map((dato, i, array) => (
                <Grid key={i} item xs={6} sm={4} md={3} lg={2} xl={2}>
                  <CardModule />
                </Grid>
              ))}
            </Grid>

      </Content>

  );
}
