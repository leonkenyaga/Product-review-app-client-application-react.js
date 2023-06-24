import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import styles from "./css/Inputfield.module.css";

const ariaLabel = { "aria-label": "description" };

export default function Inputfield(props) {
  return (
    <div className={styles.Inputfield}>
      <Input
        placeholder={props.Placeholder}
        inputProps={ariaLabel}
        color="success"
      />
    </div>
  );
}
