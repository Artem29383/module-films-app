import React from 'react';
import classes from './Button.module.scss';

const Button = ({ children, clickHandler }) => (
  <button className={classes.btn} onClick={clickHandler}>
    {children}
  </button>
);

export default Button;