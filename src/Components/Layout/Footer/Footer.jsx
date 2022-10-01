import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { footerVariant } from "./functions";

const Footer = () => {
  const currYear = new Date().getFullYear();
  console.log(currYear);
  return (
    <motion.div
      style={{ marginTop: "0.8rem", marginBottom: "0.8rem" }}
      variants={footerVariant}
      initial="initial"
      animate="animate"
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item className="footerContainer">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Grid item>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className="footerLinks"
              >
                <Grid item>
                  <motion.a
                    href="https://www.linkedin.com/in/abhinav-raj-a47588209/"
                    target="_blank"
                  >
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <LinkedInIcon className="footerIcons" />
                    </motion.div>
                  </motion.a>
                </Grid>
                <Grid item>
                  <motion.a href="https://github.com/grey-w0lF" target="_blank">
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <GitHubIcon className="footerIcons" />
                    </motion.div>
                  </motion.a>
                </Grid>
                <Grid item>
                  <motion.a
                    href="https://www.instagram.com/grey_w.0.l.f/"
                    target="_blank"
                  >
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <InstagramIcon className="footerIcons" />
                    </motion.div>
                  </motion.a>
                </Grid>
                <Grid item>
                  <motion.a
                    href="https://t.me/+tFlWVY0jfkU3MTQ1"
                    target="_blank"
                  >
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <TelegramIcon className="footerIcons" />
                    </motion.div>
                  </motion.a>
                </Grid>
                <Grid item>
                  <motion.a
                    href="mailto:abhinavrocky7488@gmail.com"
                    target="_blank"
                  >
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <EmailIcon className="footerIcons" />
                    </motion.div>
                  </motion.a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <p className="creditText">
                Created By grey_w0lf With <FavoriteIcon className="heartIcon" />{" "}
              </p>
            </Grid>
            <Grid item>
              <p className="copyRight">
                Copyright &copy; {currYear}-All Rights Reserved
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Footer;
