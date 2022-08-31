import React from "react";
import "./Homepage.css";
import { Grid, Box } from "@mui/material";

const Homepage = () => {
  return (
    <div className="homepage">
      <Grid container justifyContent="space-between">
        <Grid item className="leftContainer">
          <Grid item style={{ marginTop: "25rem" }}>
            <p className="myName">Abhinav Raj</p>
            <p className="myBio">
              A passionate individual who always thrive to work on end to end
              products which develop sustainable and scalable social and
              technical systems to create impact.
            </p>
          </Grid>
        </Grid>
        <Grid item className="rightContainer">
          Hello2
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
