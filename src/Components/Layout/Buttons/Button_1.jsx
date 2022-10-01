import React from "react";
import "./Button_Styles.css";
import { motion } from "framer-motion";
import { Button1_Variants } from "./functions";

const Button_1 = (props) => {
  return (
    <div>
      <motion.button
        className="buttonPrimary"
        variants={Button1_Variants}
        whileHover="whileHover"
        whileTap="onClick"
        onClick={props.onClick}
      >
        {props.title}
        {props.icon}
      </motion.button>
    </div>
  );
};

export default Button_1;
