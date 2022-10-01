import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Grid, Box, Popper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ReorderIcon from "@mui/icons-material/Reorder";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { motion } from "framer-motion";
import { navVariant, navItemHover } from "./functions";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ position: "fixed", marginTop: "2rem", zIndex: "99" }}
    >
      <motion.Box
        className="navContainer"
        variants={navVariant}
        initial="initial"
        animate="animate"
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <p>grey_w0lf</p>
              </Grid>
              <Grid item>
                <img src="./images/logo2.png"></img>
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
                  <motion.p whileHover={navItemHover}>
                    <HomeIcon className="navIcon" />
                    Home
                  </motion.p>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <motion.p whileHover={navItemHover} p>
                    <AccountBoxIcon className="navIcon" />
                    About
                  </motion.p>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  <motion.p whileHover={navItemHover}>
                    <BuildCircleIcon className="navIcon" />
                    Projects
                  </motion.p>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <motion.p whileHover={navItemHover}>
                    <ContactPhoneIcon className="navIcon" />
                    Contact
                  </motion.p>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="navPopper">
            <ReorderIcon
              aria-describedby={id}
              type="button"
              onClick={handleClick}
              className="toggleButton"
            >
              Toggle Popper
            </ReorderIcon>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box className="popupMenu">
                <ul>
                  <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={handleClick}
                  >
                    <li>
                      <HomeIcon className="popupIcon" />
                      Home
                    </li>
                  </Link>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none" }}
                    onClick={handleClick}
                  >
                    <li>
                      <AccountBoxIcon className="popupIcon" />
                      About
                    </li>
                  </Link>
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none" }}
                    onClick={handleClick}
                  >
                    <li>
                      <BuildCircleIcon className="popupIcon" />
                      Projects
                    </li>
                  </Link>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none" }}
                    onClick={handleClick}
                  >
                    <li>
                      <ContactPhoneIcon className="popupIcon" />
                      Contact
                    </li>
                  </Link>
                </ul>
              </Box>
            </Popper>
          </Grid>
        </Grid>
      </motion.Box>
    </Grid>
  );
};

export default Header;
