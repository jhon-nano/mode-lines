import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Chip } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Apps } from "@mui/icons-material";

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

export default function CardModule() {
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
      <Card>
        <Chip
          label="MODULO"
          color="secondary"
          sx={{
            position: "absolute",
            top: -15,
            border: 2,
            width: "80%",
            ml: 2,
          }}
        />
        <CardHeader title="COMPRAS" />
        <CardMedia sx={{ textAlign: "center" }}>
          <Apps fontSize="large"/>
        </CardMedia>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. 
          </Typography>
        </CardContent>

      </Card>
    </Stack>
  );
}
