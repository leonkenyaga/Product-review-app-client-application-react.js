import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import styles from "./css/Inputfield.module.css"

const ariaLabel = { 'aria-label': 'description' };

export default function Inputfield() {
  return (
    <div className={styles.Inputfield}>
      <Input placeholder="Description" inputProps={ariaLabel} color='success' />
    </div>
  );
}
