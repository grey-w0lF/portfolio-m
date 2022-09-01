import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Grid, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const Header = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ position: "absolute", marginTop: "4rem" }}
    >
      <Box className="navContainer">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <p>grey_w0lf</p>
              </Grid>
              <Grid item>
                <img src="./images/logo.png"></img>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className="navMenu"
            >
              <Grid item>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <p>
                    <HomeIcon className="navIcon" />
                    Home
                  </p>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <p>
                    <AccountBoxIcon className="navIcon" />
                    About
                  </p>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  <p>
                    <BuildCircleIcon className="navIcon" />
                    Project
                  </p>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <p>
                    <ContactPhoneIcon className="navIcon" />
                    Contact
                  </p>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Header;
