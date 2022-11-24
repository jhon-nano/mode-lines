import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import { useSelector } from "react-redux";
import CardModule from "../components/CardModule";
import { Content, Footer } from "@mui-treasury/layout";
import { Diversity1Outlined } from "@mui/icons-material";
import { Container } from "@mui/system";

export default function Modulos() {
  const {
    app: { loading_pag },
  } = useSelector((state) => state);

  if (loading_pag) {
    return null;
  }

  const modulos = [
    {
      icon: "shopping_bag",
      path: "/compras",
      nombreModulo: "COMPRAS",
      almacenes: true,
      responsive: true,
      offline: true,
    },
    {
      icon: "point_of_sale",
      path: "/ventas",
      nombreModulo: "VENTAS",
      almacenes: true,
      responsive: false,
      offline: true,
    },
    {
      icon: "local_drink",
      path: "/productos",
      nombreModulo: "PRODUCTOS",
      almacenes: false,
      responsive: true,
      offline: true,
    },
    {
      icon: "emoji_people",
      path: "/terceros",
      nombreModulo: "TERCEROS",
      almacenes: false,
      responsive: true,
      offline: true,
    },
    {
      icon: "import_export",
      path: "/inventarios",
      nombreModulo: "INVENTARIOS",
      almacenes: true,
      responsive: true,
      offline: true,
    },

    {
      icon: "assignment",
      path: "/solicitud-credito",
      nombreModulo: "SOLICITUDES CREDITOS",
      almacenes: true,
      responsive: true,
      offline: true,
    },
    {
      icon: "playlist_add_check_circle",
      path: "/ajustes",
      nombreModulo: "AJUSTE INVENTARIO",
      almacenes: true,
      responsive: true,
      offline: true,
    },





  ];

  return (
    <Content sx={{}}>
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ fontSize: "12px", padding: 1 }}
        spacing={1}
      >
        {modulos.map((element, i, array) => (
          <Grid key={i} item xs={6} sm={4} md={3} lg={3} xl={3}>
            <CardModule modulo={element} />
          </Grid>
        ))}
      </Grid>
    </Content>
  );
}
