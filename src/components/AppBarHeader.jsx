import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Code";
import Code from "@mui/icons-material/Code";
import { useRouter } from "next/router";

const pages = [
  { name: "Home", path: "/" },
  { name: "Modulos", path: "/modulos" },
  { name: "Contacto", path: "/contacto" },
];

function AppBarHeader() {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Code
          color="secondary"
          sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: 30 }}
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          CODE-LINES
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="secondary"
          >
            <MenuIcon sx={{ color: 'white' }}/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.path}
                disabled={page.path == router.asPath}
                onClick={() => {
                  handleCloseNavMenu();
                  router.push(`/${page.path}`);
                }}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Code
          color="secondary"
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
        />
        <Typography
          variant="h5"
          noWrap
          component="a"

          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          CODE-LINES
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            mr: 1,
          }}
        >
          <Box flexGrow={1} />
          {pages.map((page) => (
            <Button
              key={page.path}
              variant={page.path == router.asPath ? "contained" : "outlined"}
              color="secondary"
              disabled={page.path == router.asPath}
              onClick={() => router.push(page.path)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <b>{page.name}</b>
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="DEMOSTRACION APP">
            <Button
              variant="contained"
              size="large"
              color="secondary"
              sx={{ p: 0.5 }}
            >
              DEMO
            </Button>
          </Tooltip>
        </Box>
      </Toolbar>
    </Container>
  );
}
export default AppBarHeader;
