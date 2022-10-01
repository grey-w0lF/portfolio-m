import React from "react";
import { Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  eduCardVariant,
  card1Transition,
  card2Transition,
  card3Transition,
  card4Transition
} from "./functions";

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
              <ul>
                <li>
                  <a
                    href="https://www.hackerrank.com/abhinavrocky7488"
                    target="_blank"
                  >
                    <img alt="logo" src="./images/HrLogo.png"></img>
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/abhinavrocky7488/"
                    target="_blank"
                  >
                    <img alt="logo" src="./images/Leetclogo.png"></img>
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="doCards"
              variants={eduCardVariant}
              initial="initial"
              animate="animate"
              transition={card2Transition}
            >
              <h3>MULTI LANGUAGE PROGRAMMING</h3>
              <h4>I Use C++ For Problem Solving</h4>
              <h4>I Use JavaScript For Development</h4>
              <img
                alt="logo"
                src="./images/jsxcpp.png"
                style={{ bottom: "5.5rem", width: "7.5rem" }}
              ></img>
            </motion.div>
            <motion.div
              className="doCards"
              variants={eduCardVariant}
              initial="initial"
              animate="animate"
              transition={card3Transition}
            >
              <h3>FULL STACK DEVELOPMENT</h3>
              <h4 style={{ width: "32rem" }}>
                Building resposive website front end using React
              </h4>
              <h4 style={{ width: "32rem" }}>
                Creating application backend in Node, Express
              </h4>
              <img
                alt="logo"
                src="./images/full-stack-javascript-developer.jpg"
                style={{ bottom: "6.5rem", width: "5rem" }}
              ></img>
            </motion.div>

            <motion.div
              className="doCards"
              variants={eduCardVariant}
              initial="initial"
              animate="animate"
              transition={card4Transition}
            >
              <h3>DATABASES</h3>
              <h4 style={{ width: "32rem" }}>I Use C++ For Problem Solving</h4>
              <h4 style={{ width: "32rem" }}>
                Creating application backend on MongoDB Database{" "}
              </h4>
              <img
                alt="logo"
                src="./images/db.png"
                style={{ bottom: "6rem", width: "5rem" }}
              ></img>
            </motion.div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhatIDo;
