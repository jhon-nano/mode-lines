import { useTheme } from "@emotion/react";
import {
  Apps,
  Business,
  Check,
  CheckBox,
  Close,
  Cloud,
  Delete,
  Devices,
  Info,
  Security,
  WifiOff,
} from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  CardActionArea,
  CardActions,
  Chip,
  Divider,
  Icon,
  useMediaQuery,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { green, red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Stack } from "@mui/system";
import * as React from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardModule({ modulo }) {
  const [expanded, setExpanded] = React.useState(false);

  const theme = useTheme();
  const breakpoints_xs = useMediaQuery(theme.breakpoints.up("sm"));

  const { responsive, almacenes, offline } = modulo;

  return (
    <Stack
      sx={{
        position: "relative",
        display: "flex",
        margin: 1,
        marginTop: 2,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          opacity: 1,
        }}
      >
        <Chip
          label="MODULO"
          color="secondary"
          sx={{
            position: "absolute",
            top: -20,
            border: 2,
            width: "80%",
            ml: 2,
          }}
        />

        <CardHeader title={modulo.nombreModulo} sx={{ textAlign: "center" }} />

        <Grid2 container columnSpacing={2}>
          <Grid2 xs={4} sm={4} md={4} lg={4} xl={4}>
            <Icon color="info" style={{ fontSize: 80 }}>
              {modulo.icon}
            </Icon>
          </Grid2>
          <Grid2 xs={8} sm={8} md={8} lg={8} xl={8}>
            <Stack
              alignContent="center"
              alignItems={"center"}
              padding={0.5}
              spacing={0.5}
            >
              <Chip
                label={!breakpoints_xs ? "" : "Almacenes"}
                icon={<Business color={almacenes ? "primary" : "inherit"} />}
              />
              <Chip
                label={!breakpoints_xs ? "" : "Resposive"}
                icon={<Devices color={responsive ? "primary" : "inherit"} />}
              />
              <Chip
                label={!breakpoints_xs ? "" : "Offline"}
                icon={<WifiOff color={offline ? "primary" : "inherit"} />}
              />
              <Box flexGrow={1} />
            </Stack>
          </Grid2>
        </Grid2>

        <Divider />
        <CardActions>
          <AvatarGroup>
            <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp">
              <Security />
            </Avatar>
            <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp">
              <Cloud />
            </Avatar>
          </AvatarGroup>
          <Box flexGrow={1} />
          <IconButton size="small" variant="contained">
            <Info color="info" />
          </IconButton>
        </CardActions>
      </Card>
    </Stack>
  );
}
