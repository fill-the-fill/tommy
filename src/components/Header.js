import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../utils/logo/tlogo.svg";

import InstagramIcon from "@mui/icons-material/Instagram";

import { useStyles } from "../utils/uiStyles";

const pages = [
  "Home",
  "Gallery",
  "About",
  "Contact",
  "Certificate Of Authenticity",
];

const socials = {
  instagram: "https://www.instagram.com/nft.photographs/",
  opensea: "https://opensea.io/collection/oldshutter",
};

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={classes.navbar}>
      <Container maxWidth="xl">
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 10, display: { xs: "none", md: "flex" } }}
            className={classes.logo}
          >
            <a href="/" alt="link" style={{ display: "grid" }}>
              <img src={Logo} alt="logo" style={{ width: 50 }}></img>
            </a>
          </Typography>

          {/* Mobile Logo */}
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className={classes.logo}
          >
            <a href="/" alt="link" style={{ display: "grid" }}>
              <img src={Logo} alt="logo" style={{ width: 30 }}></img>
            </a>
          </Typography>

          {/* Pages */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className={classes.navigation}
          >
            {pages.map((page, key) =>
              page === "Certificate Of Authenticity" ? (
                <div key={key}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white" }}
                    className={classes.headerLinks}
                    href={"/" + page}
                  >
                    {page}
                  </Button>
                </div>
              ) : (
                <div key={key} style={{ color: "#d3d3d3" }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white" }}
                    className={classes.headerLinks}
                    href={"/" + page}
                  >
                    {page}
                  </Button>
                  |
                </div>
              )
            )}
          </Box>

          {/* Mobile Pages */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}
            style={{ textAlign: "right" }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
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
              {pages.map((page, key) => (
                <MenuItem key={key} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a
                      href={"/" + page}
                      alt="link"
                      className={classes.mobileLinks}
                    >
                      {page}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
              <div style={{ textAlign: "center" }}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socials}
                  href={socials.instagram}
                >
                  <InstagramIcon />
                </a>
                {/* <a target="_blank" rel="noreferrer" href={socials.opensea}>
                  <img
                    className={classes.socials2}
                    src={OpenseaIcon}
                    alt="icon"
                  ></img>
                </a> */}
              </div>
            </Menu>
          </Box>
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <a
              target="_blank"
              rel="noreferrer"
              className={classes.socials}
              href={socials.instagram}
            >
              <InstagramIcon />
            </a>
            {/* <a
              target="_blank"
              rel="noreferrer"
              href={socials.opensea}
            >
              <img src={OpenseaIcon} className={classes.socials1} alt="icon"></img>
            </a> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
