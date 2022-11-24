import { Apps, Business, Devices, WifiOff } from "@mui/icons-material";
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
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        <Divider />
        <CardMedia sx={{ textAlign: "center" }}>
          <Icon color="info" style={{ fontSize: 70 }}>
            {modulo.icon}
          </Icon>
        </CardMedia>
        <Divider />

        <Stack
          direction={"row"}
          alignContent="center"
          alignItems={"center"}
          padding={1}
          spacing={1}
        >
          <Avatar variant="rounded" sx={{ width: 30, height: 30 }}>
            <Business color={modulo.almacenes ? "primary" : "inherit"} />
          </Avatar>

          <Avatar variant="rounded" sx={{ width: 30, height: 30 }}>
            <Devices color={modulo.responsive ? "primary" : "inherit"} />
          </Avatar>

          <Avatar variant="rounded" r sx={{ width: 30, height: 30 }}>
            <WifiOff color={modulo.offline ? "primary" : "inherit"} />
          </Avatar>
        </Stack>

        <Divider />
        <CardActions>
          <Box flexGrow={1} />
          <Button size="small" variant="contained">
            Saber Mas
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
}
