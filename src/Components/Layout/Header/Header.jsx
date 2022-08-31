import React from "react";
import "./Header.css";
import { Grid, Box } from "@mui/material";

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
                <p>Home</p>
              </Grid>
              <Grid item>
                <p>About</p>
              </Grid>
              <Grid item>
                <p>Project</p>
              </Grid>
              <Grid item>
                <p>Contact</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Header;
