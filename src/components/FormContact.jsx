import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Comment, Error, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader, Divider, FormHelperText,
  Grid,
  InputAdornment,
  LinearProgress,
  Skeleton, TextField
} from "@mui/material";
import CreatableSelect from "react-select/creatable";

export function FormContact({ card_actions, loading }) {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const inputPropsText = {
    style: { textTransform: "uppercase" },
  };


  return (
    <Card elevation={9}>
      <CardHeader
        action={
          <LoadingButton
            color="primary"
            type="submit"
            loading={loading}
            loadingPosition="start"
            startIcon={<Save />}
            variant="contained"
          >
            {loading ? "CARGANDO" : "ENVIAR"}
          </LoadingButton>
        }
        title={<b>Formulario Contacto</b>}
        //subheader={ayuda}
      />
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {loading ? (
              <Skeleton height={50} />
            ) : (
              <Controller
                name="nombreProducto"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    focused
                    color="info"
                    onKeyPress={(e) => {
                      e.key === "Enter" && e.preventDefault();
                    }}
                    size="small"
                    label="Nombre"
                    variant="outlined"
                    type="text"
                  />
                )}
              />
            )}
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            {loading ? (
              <Skeleton height={50} />
            ) : (
              <Controller
                name="iva"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    focused
                    color="info"
                    fullWidth
                    onKeyPress={(e) => {
                      e.key === "Enter" && e.preventDefault();
                    }}
                    defaultValue={0}
                    size="small"
                    label="Email"
                    variant="outlined"
                    type="number"
                  />
                )}
              />
            )}
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            {loading ? (
              <Skeleton height={50} />
            ) : (
              <Controller
                name="barras"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    focused
                    fullWidth
                    size="small"
                    onKeyPress={(e) => {
                      e.key === "Enter" && e.preventDefault();
                    }}
                    label="Correo"
                    variant="outlined"
                    type="text"
                  />
                )}
              />
            )}
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {loading ? (
              <Skeleton height={150} />
            ) : (
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    multiline
                    rows={2}
                    focused
                    label="Mensaje"
                    variant="outlined"
                    type="text"
                    error={errors && errors.descripcion}
                    helperText={errors && errors.descripcion?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Comment color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment:
                        errors && errors.descripcion ? (
                          <InputAdornment position="start">
                            <Error color="error" />
                          </InputAdornment>
                        ) : (
                          ""
                        ),
                    }}
                    inputProps={inputPropsText}
                  />
                )}
                name="descripcion"
                control={control}
              />
            )}
          </Grid>
          
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Divider>Fin del Formulario</Divider>
          </Grid>
        </Grid>
      </CardContent>
      {card_actions ? (
        loading ? (
          <LinearProgress variant="indeterminate" />
        ) : (
          <CardActions>
            <Box flexGrow={1} />
            <Button
              variant="contained"
              color="primary"
              size="s"
              type="submit"
              data-testid="submit"
            >
              Registrar
            </Button>
          </CardActions>
        )
      ) : (
        ""
      )}
    </Card>
  );
}

