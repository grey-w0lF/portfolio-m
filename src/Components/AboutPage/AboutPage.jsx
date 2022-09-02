import React from "react";
import "./AboutPage.css";
import { Grid, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";
import {
  eduCardVariant,
  card1Transition,
  card2Transition,
  card3Transition,
} from "./functions";

const AboutPage = () => {
  return (
    <div className="AboutPageContainer">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item className="aboutLeftContainer" xs={12} sm={6}>
          <Box className="shapeBox1">
            <Box>
              <SchoolIcon className="schoolIcon" />
              <h2>Educations</h2>
              <p>Something i want to say later</p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className="aboutRightContainer">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <motion.div
                className="eduCards"
                variants={eduCardVariant}
                initial="initial"
                animate="animate"
                transition={card1Transition}
              >
                <h3>
                  <SchoolIcon className="cardIcon1" />
                  Secondary Education
                </h3>
                <h4>Dav Public School (2016)</h4>
                <img alt="logo" src="./images/cbselogo.png"></img>
                <p>Darbhanga Road, Bakhri Chowk,Muzaffarpur, Bihar 843103</p>
                <a href="http://davpsmuzaffarpur.com/" target="_blank">
                  <LanguageIcon className="webIcon" />
                </a>
              </motion.div>
              <motion.div
                className="eduCards"
                variants={eduCardVariant}
                initial="initial"
                animate="animate"
                transition={card2Transition}
              >
                <h3>
                  <SchoolIcon className="cardIcon1" />
                  Higher Secondary Education
                </h3>
                <h4>Holy Cross Public School (2018)</h4>

                <img alt="logo" src="./images/cbselogo.png"></img>
                <p>Manika Bishanpur Chand ,Muzaffarpur, Bihar 843119</p>
                <a href="">
                  <LanguageIcon className="webIcon" />
                </a>
              </motion.div>
              <motion.div
                className="eduCards"
                variants={eduCardVariant}
                initial="initial"
                animate="animate"
                transition={card3Transition}
              >
                <h3>
                  <SchoolIcon className="cardIcon1" />
                  Graduation
                </h3>
                <h4>Sinhgad College of Engineering (2019-Present)</h4>
                <img alt="logo" src="./images/SPPULogo.png"></img>
                <p>Sinhgad Rd, Vadgaon Budruk, Pune, Maharashtra 411041</p>
                <a href="http://www.unipune.ac.in/" target="_blank">
                  <LanguageIcon className="webIcon" />
                </a>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPage;
