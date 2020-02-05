import React from 'react';
import classes from './Button.module.scss';

const Button = ({ children, changeHandler }) => (
  <button className={classes.btn} onClick={changeHandler}>
    {children}
  </button>
);

export default Button;