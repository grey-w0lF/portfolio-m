import React from "react";
import "./Homepage.css";
import { Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  grid1_initial,
  grid1_animate,
  grid1_transition,
  nameHover,
} from "./functions";

const Homepage = () => {
  return (
    <div className="homepage">
      <Grid container justifyContent="space-between">
        <Grid item className="leftContainer" xs={12} sm={6}>
          <motion.div
            initial={grid1_initial}
            animate={grid1_animate}
            transition={grid1_transition}
          >
            <Grid item style={{ marginTop: "15rem" }}>
              <motion.p className="myName" whileHover={nameHover}>
                Abhinav Raj
              </motion.p>
              <p className="myBio">
                A passionate individual who always thrive to work on end to end
                products which develop sustainable and scalable social and
                technical systems to create impact.
              </p>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item className="rightContainer" xs={12} sm={6}></Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
