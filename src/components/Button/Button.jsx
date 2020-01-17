import React from 'react';
import classes from './Button.module.scss';

const Button = ({ text, fn }) => (
  <button className={classes.btn} onClick={fn}>
    {text}
  </button>
);

export default Button;