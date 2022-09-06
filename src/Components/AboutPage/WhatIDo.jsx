import React from "react";
import { Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import { eduCardVariant, card1Transition } from "./functions";

const WhatIDo = () => {
  return (
    <div className="iDoContainer">
      <Grid container justifyContent="space-between">
        <Grid item className="iDoLeftContainer" xs={12} sm={6}>
          <Box className="eduContainer">
            <h2>What I Do?</h2>
            <p></p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="iDoRightContainer">
            <motion.div
              className="doCards"
              variants={eduCardVariant}
              initial="initial"
              animate="animate"
              transition={card1Transition}
            >
              <h3>Secondary Education</h3>
              <h4>Dav Public School (2016)</h4>
              <img alt="logo" src="./images/cbselogo.png"></img>
              <p>Darbhanga Road, Bakhri Chowk,Muzaffarpur, Bihar 843103</p>
              <a href="http://davpsmuzaffarpur.com/" target="_blank"></a>
            </motion.div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhatIDo;
