import { React, useState } from "react";
import { sendEmail } from "./functions";
import "./Contact.css";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import CancelIcon from "@mui/icons-material/Cancel";

const Contact = () => {
  const [showLForm, setShowLForm] = useState("formLeft");
  const [showRForm, setShowRForm] = useState("formRight");
  let [from_name, setFromName] = useState();
  let [to_name, setToName] = useState("Abhinav Raj");
  let [from_email, setFromEmail] = useState();
  let [from_number, setFromNumber] = useState();
  let [to_email, setToEmail] = useState("abhinavrocky7488@gmail.com");
  let [message, setMessage] = useState();
  const data = {
    from_name,
    to_name,
    from_email,
    to_email,
    message,
  };

  const handleShowForm = (event) => {
    setShowLForm("formLeft formLeftHid");
    setShowRForm("formRight formRightHid");
  };
  const handleCancel = (event) => {
    setShowLForm("formLeft");
    setShowRForm("formRight");
  };
  const handleSendEmail = (e) => {
    sendEmail(e, data);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="contactMainContainer"
    >
      <Grid
        container
        justifyContent="space-between"
        className="formMainContainer"
      >
        <Grid item className={showLForm}>
          <CancelIcon className="cancelButton" onClick={handleCancel} />
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <Grid item style={{ marginTop: "1.5rem" }}>
              <label>Your Name </label>
              <input
                type="text"
                name="from_name"
                value={from_name}
                onChange={(e) => {
                  setFromName(e.target.value);
                }}
              ></input>
            </Grid>
            <Grid item style={{ marginTop: "1.5rem" }}>
              <label>Your Email</label>
              <input
                type="email"
                name="from_email"
                value={from_email}
                onChange={(e) => {
                  setFromEmail(e.target.value);
                }}
              ></input>
            </Grid>
            <Grid item style={{ marginTop: "1.5rem" }}>
              <label>Your Phone Number</label>
              <input
                type="text"
                name="from_number"
                value={from_number}
                onChange={(e) => {
                  setFromNumber(e.target.value);
                }}
              ></input>
            </Grid>
            <Grid item style={{ marginTop: "1.5rem" }}>
              <label>Your Message</label>
              <textarea
                type="text"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </Grid>
            <Grid item style={{ marginTop: "1.5rem" }}>
              <motion.button
                type="Submit"
                className="buttonPrimary"
                onClick={handleSendEmail}
                whileHover={{ scale: 1.2 }}
              >
                Send
              </motion.button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={showRForm}>
          <p>Get in Touch! </p>
          <h6 className="messageMe">
            Send A Message
            <EmailIcon className="icons" onClick={handleShowForm} />
          </h6>

          <Grid
            container
            justifyContent="center"
            alignItems="flex-end"
            style={{ height: "85%" }}
          >
            <Grid item className="contactFormLinks">
              <motion.a
                href="https://www.linkedin.com/in/abhinav-raj-a47588209/"
                target="_blank"
              >
                <motion.div whileHover={{ scale: 1.2 }}>
                  <LinkedInIcon className="icons" />
                </motion.div>
              </motion.a>
            </Grid>
            <Grid item className="contactFormLinks">
              <motion.a href="https://github.com/grey-w0lF" target="_blank">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <GitHubIcon className="icons" />
                </motion.div>
              </motion.a>
            </Grid>
            <Grid item className="contactFormLinks">
              <motion.a
                href="https://www.instagram.com/grey_w.0.l.f/"
                target="_blank"
              >
                <motion.div whileHover={{ scale: 1.2 }}>
                  <InstagramIcon className="icons" />
                </motion.div>
              </motion.a>
            </Grid>
            <Grid item className="contactFormLinks">
              <motion.a href="https://t.me/+tFlWVY0jfkU3MTQ1" target="_blank">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <TelegramIcon className="icons" />
                </motion.div>
              </motion.a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
