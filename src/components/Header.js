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
import Logo from "../utils/logo/logo.png";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import OpenseaIcon from "../utils/logo/opensea.png";

import { useStyles } from "../utils/uiStyles";

const pages = [
  "Home",
  "Gallery",
  "About",
  "Contact",
  "Certificate Of Authenticity",
];

const socials = {
  instagram: "test",
  facebook: "test",
  twitter: "test",
  opensea: "test",
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
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
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
                <div style={{ color: "black" }} key={key}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white" }}
                    style={{ color: "black" }}
                    className={classes.logo}
                    href={"/" + page}
                  >
                    {page}
                  </Button>
                </div>
              ) : (
                <div style={{ color: "#D3D3D3" }} key={key}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white" }}
                    style={{ color: "black" }}
                    className={classes.logo}
                    href={"/" + page}
                  >
                    {page}
                  </Button>{" "}
                  |
                </div>
              )
            )}
          </Box>

          {/* Mobile Pages */}
          <Box sx={{ flexGrow: 1, display: { xs: "contents", md: "none" } }}>
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
              <div style={{textAlign: 'center'}}>
                <a
                  target="__blank"
                  className={classes.socials}
                  href={socials.instagram}
                >
                  <InstagramIcon />
                </a>
                <a
                  target="__blank"
                  className={classes.socials}
                  href={socials.facebook}
                >
                  <FacebookIcon />
                </a>
                <a
                  target="__blank"
                  className={classes.socials}
                  href={socials.twitter}
                >
                  <TwitterIcon />
                </a>
                <a
                  target="__blank"
                  className={classes.socials}
                  href={socials.twitter}
                >
                  <img src={OpenseaIcon} alt="icon" style={{ width: 25 }}></img>
                </a>
              </div>
            </Menu>
          </Box>
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <a
              target="__blank"
              className={classes.socials}
              href={socials.instagram}
            >
              <InstagramIcon />
            </a>
            <a
              target="__blank"
              className={classes.socials}
              href={socials.facebook}
            >
              <FacebookIcon />
            </a>
            <a
              target="__blank"
              className={classes.socials}
              href={socials.twitter}
            >
              <TwitterIcon />
            </a>
            <a
              target="__blank"
              className={classes.socials}
              href={socials.twitter}
            >
              <img src={OpenseaIcon} alt="icon" style={{ width: 25 }}></img>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
